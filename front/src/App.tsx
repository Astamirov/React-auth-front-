import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { Routes, Route, Navigate } from 'react-router-dom'
import Users from './components/Users'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'


function App() {
  const token = useSelector((state: RootState) => state.application.token)

  if(!token) {
    return (
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/auth' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/login' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App
