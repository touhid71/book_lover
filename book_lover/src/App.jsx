import './App.css'
import Bookmarks from './components/Bookmarks/Bookmark'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  return (
    <>
    
          <Header></Header>
      <div className='md:flex max-w-4xl mx-auto '>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
