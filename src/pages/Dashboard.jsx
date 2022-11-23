import React, { useContext } from "react";
import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";

const Dashboard = () => {
  const { blogData } = useContext(BlogContext);
  return (
    <Layout>
      <div className="text-5xl text-center mt-5"> Dashboard </div>
      <div className="flex justify-around gap-3 flex-wrap mt-5 ">
        {blogData?.map((item, idx) => (
          <div key={idx}>
            <BlogCard data={item} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
