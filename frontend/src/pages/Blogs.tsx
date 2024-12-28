import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks/index"

export const Blogs = ( ) =>{
  const {blogs} = useBlogs();
 return<div>
<Appbar></Appbar>

 <div className="flex justify-center">
  <div className=" max-w-l">
 {blogs.map(blog=> <BlogCard
    id = {blog.id}
    authorName={blog.author.name || "Anonymous"}
    title = {blog.title}
    content={blog.content}
    publishedDate={"26th Dec 2024"}
    />)}

</div>
 </div>
 </div>
}