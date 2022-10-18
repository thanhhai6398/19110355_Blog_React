
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AddBlog from './components/AddBlog';
import EditBlog from './components/EditBlog';
import ListBlogs from './components/ListBlogs';
import BlogDetail from './components/BlogDetail';

function App() {
  const [blogs, setBlogs] = useState([]);
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Blog</h1>
        <Link className='App-link' to="/">Trang chủ</Link> | <Link className='App-link' to="/add">Thêm mới</Link>
      </header>
      <div className='content'>
        <Routes>
          <Route path="/" element={<ListBlogs blogs={blogs} setBlogs={setBlogs} />}></Route>
          <Route path="/:id" element={<BlogDetail blogs={blogs} setBlogs={setBlogs} />}></Route>
          <Route path="/add" element={<AddBlog setBlogs={setBlogs} />}></Route>
          <Route path="/edit/:id" element={<EditBlog blogs={blogs} setBlogs={setBlogs} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
