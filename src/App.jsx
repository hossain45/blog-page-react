import { useState } from "react"
import Blogs from "./Blogs"
import Playlist from "./Playlist"
import Header from "./Header"


function App() {
  const [playlist, setPlaylist] = useState([])
  const handleAddToPlaylist = (blog) =>{
    let newPLaylist = [...playlist, blog];
    setPlaylist(newPLaylist);
  }
  return (
    <div className="w-5/6 mx-auto">
      <Header />
      <div className="grid grid-cols-[2fr,1fr] gap-2 place-items-start">
        <Blogs
          className="col-span-2"
          handleAddToPlaylist={handleAddToPlaylist}
        />
        <Playlist 
          className="" 
          playlist={playlist} 
        />
      </div>

    </div>
  )
}

export default App
