import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/usersSlice'
import { AppDispatch, RootState } from '../app/store'

const Users = () => {
    const dispatch = useDispatch<AppDispatch>()

    const users = useSelector((state: RootState) => state.users.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    return (
        <div>
            {users.map((item) => {
                return <div key={item._id}>{item.login}</div>
            })}
        </div>
    )
}

export default Users 