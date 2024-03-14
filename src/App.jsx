import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [read,setRead]= useState(0);

  const handleBookmarksAdd = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handleReadingTime = (time,id) =>{
    const newTime = read + time;
    setRead(newTime);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex container mx-auto p-4 gap-4'>
      <Blogs handleBookmarksAdd={handleBookmarksAdd} handleReadingTime={handleReadingTime}></Blogs>
      <Bookmarks read={read} bookmarks={bookmarks}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
