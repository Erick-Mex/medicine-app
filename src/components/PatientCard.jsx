import React from 'react'

export default function PatientCard({ patient }) {
  return (
    <div>
      <p>{patient.Id}</p>
      <p>{patient.Name}</p>
      <p>{patient.Sex}</p>
      <p>{patient.Age}</p>
      <p>{patient.RegistrationDate}</p>
    </div>
  )
}
