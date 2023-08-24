import { useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authSignIn } from '../features/applicationSlice'
import { AppDispatch, RootState } from '../app/store'


const SignIn = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const error = useSelector((state: RootState) => state.application.error) as string | null;
    
    const dispatch = useDispatch<AppDispatch>()
    
    const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }
    
    const handleSetPass = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    
    const handleSignIn = (e: FormEvent) => {
        e.preventDefault()
        dispatch(authSignIn({_id: '', login, password }))
    }

    if (error) {
        return <div>{error}</div>
    }
    
    return (
        <form onSubmit={handleSignIn}>
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


export default SignIn