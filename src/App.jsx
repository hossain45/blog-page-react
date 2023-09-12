import { useState, useEffect } from "react"
import Blogs from "./Blogs"
import Bookmarks from "./Bookmarks"
import Header from "./Header"

function App() {
  return (
    <div className="w-5/6 mx-auto">
      <Header />
      <div className="flex justify-between gap-5">
        <Blogs 
          className="w-2/3"
        />
        <Bookmarks 
          className="w-1/3"
        />
      </div>
    </div>
  )
}

export default App
