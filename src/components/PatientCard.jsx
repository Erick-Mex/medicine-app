import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

export default function PatientCard({ patient }) {

  const [error, setError] = React.useState(false)

  return (
    <div className='grid gap-1 grid-cols-3 grid-rows-3 bg-white rounded-md p-2 hover:drop-shadow-lg hover:bg-slate-200 hover:cursor-pointer'>
      <span className='row-span-3 justify-self-center self-center'>
        {!error ? <img loading='lazy' src={patient.ProfileURL} alt="" onError={() => setError(true)}/> : <FaRegUserCircle size={90} /> }
      </span>
      <p className='col-span-2'>{patient.Name}</p>
      <p className='col-span-2'>{patient.Sex === "Male" ? "Hombre" : "Mujer"}</p>
      <p className='col-span-2'>{patient.Age} A&#241;os</p>
    </div>
  )
}
