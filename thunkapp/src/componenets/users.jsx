import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchUsers } from '../reducers/usersSlice'
import User from './User'

const Users = () => {

    let  data = useSelector((state)=> state.usersSlice)
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

  return (
    <div>
         {/* {console.log(data)}
        {JSON.stringify(data)} */}

        {data.users.map((user)=> <User user={user}></User>)}

    </div>
  )
}

export default Users