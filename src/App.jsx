import { BrowserRouter, Routes, Route } from 'react-router-dom'
/* import AppHeader from "./components/AppHeader.jsx"
import AppArticleForm from './components/ApparticleForm.jsx'
import AppListPost from './components/AppListPost.jsx' */
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Posts from "./pages/posts.jsx"
import DefaultLayout from './pages/DefaultLayout.jsx'
import PostPage from './pages/PostPage.jsx'
import GlobalContext from './contexts/GlobalContext.jsx'



function App() {





  return (
    <>
      <GlobalContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/posts' element={<Posts />}></Route>
              <Route path='/posts/:slug' element={<PostPage />}></Route>
              <Route path='/About' element={<About />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>

    </>
  )
}

export default App
