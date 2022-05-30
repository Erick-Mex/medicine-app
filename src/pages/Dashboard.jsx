import React from 'react'
import { useAuth } from '../context/AuthProvider'
import PatientGrid from '../components/PatientGrid';

export default function Dashboard() {

  const { logOut } = useAuth();

  return (
    <>
      <PatientGrid />
      <button onClick={logOut}> Cerrar sesion</button>
    </>
  )
}
