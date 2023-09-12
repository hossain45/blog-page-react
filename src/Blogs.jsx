import { useEffect, useState } from "react";
import Blog from "./blog"

function Blogs() {
  let [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await res.json();
        const posts = data.data;
        setBlogs(posts);

      } catch (error) {
        console.log('Error : ', error);
      }
    }
    fetchData();
  },[])

  return (
    <div className="grid grid-cols-3 gap-5 place-content-between w-full mt-5">
    {
      blogs.map((blog) => 
      <Blog 
        key={blog.category_id}
        blog={blog}
      />)
    }
      
    </div>
  )
}

export default Blogs