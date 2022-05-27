import React from 'react'
import { useAuth } from '../context/AuthProvider'
import PatientGrid from '../components/PatientGrid';

export default function Dashboard() {

  const { logOut } = useAuth();

  return (
    <div className='h-full min-h-full'>
      <PatientGrid />
      <button onClick={logOut}> Cerrar sesion</button>
    </div>
  )
}
