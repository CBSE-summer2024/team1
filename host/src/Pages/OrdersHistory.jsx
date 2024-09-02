import React from 'react'
import HistoryList from 'UserManagementTeam/HistoryList'
import ComponentAdapter from "../Adapters/ComponentAdapter";
import { useAuth } from '../context/AuthContext';



export default function OrdersHistory() {
  const {user,loading} = useAuth();
  if(loading){
    return <h1>loading</h1>
  }

  return (
    <ComponentAdapter Component={HistoryList} framework='vue' props={{
      userId:user.id
    }} />
  )
}
