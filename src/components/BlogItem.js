import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogItem = ({ blog, Delete }) => {
  const { id, title, content } = blog;
  const navigate = useNavigate();
  const ClickTitle = () => {
    navigate('/' + id);
  }
  const Edit = () => {
    navigate('/edit/' + id);
  }
  return (
    <li className='blog-item'>
      <h4
        onClick={ClickTitle}
      >{id} - {title}</h4>
      <p>{content}</p>
      <button className='btn edit' onClick={Edit}>Cập nhật</button>
      <button className='btn del' onClick={() => Delete(id)}>Xóa</button>
    </li>
  )
}

export default BlogItem;