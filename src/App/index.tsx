import AppBarTop from './AppBarTop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Counter } from '../redux/features/counter/Counter'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'

export const Index = (): JSX.Element => {
  return (
    <div>
      <BrowserRouter>
        <AppBarTop />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Counter />
    </div>
  )
}

export default Index
