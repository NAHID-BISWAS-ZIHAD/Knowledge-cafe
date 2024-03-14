import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks,read }) => {
    return (

        <div className='md:w-1/3'>
            <div className='bg-black p-4'>
                <h3 className="text-4xl text-center text-white">Reading Time: {read}</h3>
            </div>
            <div className=" bg-gray-600 p-4">
                <h2 className="text-3xl text-center text-white p-4">Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>

    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    read: PropTypes.number
}

export default Bookmarks;