import { useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { authSignUp } from '../features/applicationSlice'
import { AppDispatch } from '../app/store'


const SignUp = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch<AppDispatch>()
    
    const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }
    
    const handleSetPass = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    
    const handleSignUp = (e: FormEvent) => {
        e.preventDefault()
        setLogin('')
        setPassword('')
        dispatch(authSignUp({_id: '', login, password}))
    }
    
    return (
        <form onSubmit={handleSignUp}>
            <input 
                type="text"
                value={login}
                placeholder="name"
                onChange={handleSetName}
            />
            <br />
            <input 
                type="password" 
                value={password}
                placeholder="password"
                onChange={handleSetPass}
            />
            <br />
            <button type='submit'>auth</button>
        </form>
    )
}


export default SignUp