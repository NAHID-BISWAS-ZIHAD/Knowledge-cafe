import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookmarksAdd, handleReadingTime }) => {
    const { id,title, cover, author_img, author, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex items-center gap-4 '>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleBookmarksAdd(blog)} className='text-3xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl mb-4'>{title}</h1>
            {
                hashtags.map((hash, idx) => <span key={idx}>#{hash}</span>)
            }
            <br />
            <button onClick={() => handleReadingTime(reading_time,id)} className='text-purple-600 underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarksAdd: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func
}

export default Blog;