import React from "react";
import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
const Dashboard = () => {
  return (
    <Layout>
      <div className="text-5xl text-center mt-5"> Dashboard </div>
      <div className="flex justify-around gap-3 flex-wrap mt-5 ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Layout>
  );
};

export default Dashboard;
