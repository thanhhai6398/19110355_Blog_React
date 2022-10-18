import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetail = ({ blogs, setBlogs }) => {
    const { id } = useParams();
    const [blog, setBlog] = useState({ title: ' ', content: ' ', comments: [] });
    const commentInput = useRef();
    useEffect(() => {
        const result = blogs.find(b => b.id === Number.parseInt(id));
        setBlog(result);
    }, [])
    const Comment = (e) => {
        e.preventDefault();
        let newComment = commentInput.current.value;
        if (newComment) {
            let comments = [...blog.comments, newComment]
            const newBlog = { ...blog, comments };
            const temp = [...blogs];
            const index = blogs.findIndex(b => b.id === Number.parseInt(id));
            temp[index] = newBlog;
            setBlogs(temp);
            setBlog(newBlog);
            commentInput.current.value = '';
        }
    }
    return (
        <div className='wrapper blog-detail'>
            <h3>{blog ? blog.title : ' '}</h3>
            <p>{blog ? blog.content : ' '}</p>
            <h4>Comments</h4>
            <form onSubmit={Comment}>
                <input ref={commentInput} type="text" placeholder="Nhập bình luận..." name="comment" />
                <button type="submit">Gửi</button>
            </form>
            <ul>
                {
                    blog && blog.comments.map((commnent, index) => <li key={index} className='comment-item'>{commnent}</li>)
                }
            </ul>
        </div>
    )
}

export default BlogDetail