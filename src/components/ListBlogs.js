import React from 'react';
import BlogItem from './BlogItem';

const List = ({ blogs, setBlogs }) => {
    const Delete = async (id) => {
        let index = blogs.findIndex(blog => blog.id === id);
        if (index > -1) {
            const answer = window.confirm('Bạn muốn xóa blog ' + id + "?");
            if (answer) {
                setBlogs(prev => {
                    let temp = [...prev];
                    temp.splice(index, 1);
                    return temp;
                })
            }
        }
    }
    return (
        <div className='wrapper'>
            <h3>Danh sách Blogs</h3>
            <ul>
                {
                    blogs && blogs.map(blog => <BlogItem key={blog.id} blog={blog} Delete={Delete} />)
                }
            </ul>
        </div>
    )
}
export default List;
