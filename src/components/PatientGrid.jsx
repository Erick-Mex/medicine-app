import React from "react";
import PatientCard from "./PatientCard";
import Patients from '../MOCK_DATA.json';

/*
Datos de un paciente:
 - Imagen
 - Nombre
 - Edad
 - Sexo
 - Estatura
 - Peso
 - Alergias
 - Historial medico
 - Fecha de Registro ?
 - Historial de visitas ?
*/

export default function PatientGrid() {
  return (
    <div className="grid grid-cols-[100%] sm:grid-cols-auto-fill gap-10 p-10 justify-center">
      {Patients.map(patient => (
        <PatientCard key={patient.Id} patient={patient} />
      ))}
    </div>
  );
}
