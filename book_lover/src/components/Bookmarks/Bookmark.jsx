import React from 'react';

const Bookmark = ({bookmarks}) => {
    return (
        <div className='md:w-1/3 '>
            
            <h2>Bookmark: {bookmarks.length}</h2>
        </div>
    );
};

export default Bookmark;