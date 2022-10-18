import React, { useRef, useState } from 'react'
import Blog from '../models/blogModel'

const AddBlog = (props) => {
    const getID = useRef(1);
    const [input, setInput] = useState({ title: '', content: '' });
    const { setBlogs } = props;
    const Change = (e) => {
        setInput((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }
    const Submit = (e) => {
        e.preventDefault();
        if (input.title && input.content) {
            setBlogs(prev => {
                let newBlog = new Blog(getID.current, input.title, input.content);
                getID.current++;
                return [...prev, newBlog];
            });
            setInput({ title: '', content: '' });
        }
        else alert('Không hợp lệ');
    }
    return (
        <div className='wrapper'>
            <h3>Thêm mới Blog</h3>
            <form onSubmit={Submit}>
                <div>
                    <div>
                        <label>Tiêu đề</label>
                        <input type='text'
                            placeholder='Nhập tiêu đề'
                            className='form-control'
                            name='title'
                            value={input.title}
                            onChange={Change} />
                    </div>
                    <div>
                        <label>Nội dung</label>
                        <input name="content"
                            placeholder='Nhập nội dung...'
                            maxLength="50"
                            onChange={Change}
                            value={input.content} />
                    </div>
                </div>
                <button type='submit'>Thêm</button>
            </form>
        </div>
    )
}

export default AddBlog