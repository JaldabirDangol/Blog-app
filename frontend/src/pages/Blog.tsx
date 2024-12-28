import {useBlog} from '../hooks/index'
import { useParams } from 'react-router-dom';
import { FullBlog } from '../components/FullBlog';
import { BlogSkelton } from '../components/Skeleton';

export const Blog = ()=>{
    const{id} = useParams();
    console.log("Blog ID:", id);
const {loading,blog} = useBlog({
    id: id || "",

});

if(loading){
    return<div>
        <BlogSkelton/>
        <BlogSkelton/>
        <BlogSkelton/>
        <BlogSkelton/>
        <BlogSkelton/>
        </div>
}
if (!blog) {
    return <div>Blog not found.</div>;
}
    return <div>
        <FullBlog blog={blog}/>
        </div>
}  