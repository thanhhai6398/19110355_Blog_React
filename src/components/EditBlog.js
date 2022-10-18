import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlog = ({ blogs, setBlogs }) => {
    const { id } = useParams();
    const [blog, setBlog] = useState({ title: ' ', content: ' ', comments: [] });
    useEffect(() => {
        const blog = blogs.find(b => b.id === Number.parseInt(id));
        setBlog(blog);
    }, [])
    const navigate = useNavigate();
    const Submit = (e) => {
        e.preventDefault();
        const answer = window.confirm('Xác nhận cập nhật?');
        if (answer) {
            setBlogs(prev => {
                const temp = [...prev];
                const index = prev.findIndex(b => b.id === Number.parseInt(id));
                temp[index] = blog;
                return temp;
            })
            navigate('/')
        }

    }
    const Change = (e) => {
        setBlog(prev => {
            return { ...prev, [e.target.name]: e.target.value };
        })
    }
    return (
        <div className='wrapper'>
            <h3>Cập nhật Blog</h3>
            <form onSubmit={Submit}>
                <div>
                    <div>
                        <label>Tiêu đề</label>
                        <input type='text'
                            placeholder='Nhập tiêu đề'
                            className='form-control'
                            name='title'
                            value={blog.title}
                            onChange={Change} />
                    </div>
                    <div>
                        <label>Nội dung</label>
                        <input placeholder='Nhập nội dung...'
                            value={blog.content}
                            name='content'
                            onChange={Change} />
                    </div>
                </div>
                <button>Cập nhật</button>
            </form>
        </div>
    )
}

export default EditBlog