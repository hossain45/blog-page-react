import React from 'react'

function PlaylistItem({ post }) {
  const {thumbnail, title} = post
  // console.log(thumbnail, title);
  return (
    <div className='flex flex-row justify-between items-start gap-2 bg-slate-100 p-5 w-full'>
      <img src={thumbnail} alt="" className='w-[50px] h-[50px] rounded-md'/>
      <p className=' font-semibold text-lg flex-1'>
        {title}
      </p>
    </div>
  )
}

export default PlaylistItem