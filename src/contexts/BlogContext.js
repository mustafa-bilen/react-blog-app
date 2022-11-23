import { onValue, push, ref, set } from "firebase/database";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../helpers/firebase";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [textArea, setTextArea] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [blogData, setBlogData] = useState(undefined);
  const handleSubmit = () => {
    const newPost = {
      textArea,
      image,
      title,
      username: auth.currentUser.email,
      userId: auth.currentUser.uid,
      logdate: new Date().getMonth() + new Date(),
    };
    saveToDatabase(newPost);
  };

  const saveToDatabase = (item) => {
    const blogRef = ref(db, "Blog");
    const newBlogRef = push(blogRef);
    set(newBlogRef, {
      ...item,
    });
  };

  useEffect(() => {
    const blogRef = ref(db, "Blog");
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const blogArr = [];
      for (let id in data) {
        blogArr.push({ id, ...data[id] });
      }
      setBlogData(blogArr);
    });
  }, []);

  // const writeUserData = () => {
  //   const db = getDatabase();
  //   set(ref(db, "users/" + userId), {
  //     username: auth.currentUser.displayName,
  //     email: auth.currentUser.email,
  //     image_url: image,
  //   });
  // };
  return (
    <BlogContext.Provider
      value={{
        textArea,
        setTextArea,
        image,
        setImage,
        title,
        setTitle,
        handleSubmit,
        blogData,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
