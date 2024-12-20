import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Repository, SignIn } from './pages'

const App = () => {
  return (
    <main className='bg-slate-300/15'>
      <Router>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/repository' element={<Repository />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App