import { Appbar } from "./Appbar";
import { Blog } from "../hooks/index";
import { Avatar } from "../components/BlogCard";
export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl ">
          <div className="col-span-8">
            <div className="text-3xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2  ">
              posted on 26december 2024
            </div>
            <div className="pt-4">{blog.content} </div>
          </div>

          <div className=" col-span-4">
            <div className="text-lg text-slate-600   ">Author</div>{" "}
            <div className="flex">
              <div className="flex flex-col justify-center pr-4">
                <Avatar name={blog.author.name || "Anonyomous"}></Avatar>
              </div>
              <div>
                <div className="font-bold text-xl">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="text-slate-600 pt-2"> catch random </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
