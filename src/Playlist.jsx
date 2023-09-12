import React from 'react'
import PlaylistItem from './PlaylistItem';

function Playlist({ playlist }) {
  // console.log(playlist);
  return (
    <div className="flex flex-col gap-3 justify-center items-center my-5">
      {playlist.map((post) => (
        <PlaylistItem 
          key={post.category_id}
          post={post}
        />
      ))}
    </div>
  );
}


export default Playlist