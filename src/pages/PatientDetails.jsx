import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import styles from "./PatientDetails.module.css";
import { FaRegUserCircle } from "react-icons/fa";

//TODO cambiarlo para que acepte por una api que por local
import Patients from "../MOCK_DATA.json";

export default function PatientDetails() {
  const [imgError, setImgError] = useState(false);
  const [patient, setPatient] = useState({});
  const { idPatient } = useParams();

  useEffect(() => {
    const getPatient = (patient) => {
      return patient.Id === idPatient;
    };
    setPatient(Patients.find(getPatient));
  }, [idPatient]);

  return (
    <>
      <header>
        <Link to="/dashboard" className={`inline-flex`}>
          <FaLongArrowAltLeft className="self-center" />
          Lista de Pacientes
        </Link>
      </header>

      <section className="h-screen">
        <div className="grid grid-cols-3 m-auto bg-cyan-600 p-7 max-w-xl md:max-w-3xl lg:max-w-5xl">
          <div className="">
            {!imgError ? <img loading="lazy" className="row-span-3" src={patient.ProfileURL} alt="" onError={() => {setImgError(true)}} /> : <FaRegUserCircle size={112} /> }
          </div>
          {/* <p>{patient.Id}</p>
          <p>{patient.Name}</p>
          <p>{patient.Sex}</p>
          <p>{patient.Age}</p>
          <p>{patient.Weight}</p>
          <p>{patient.Height}</p>
          <p>{patient.RegistrationDate}</p>
          <p>{patient.ProfileURL}</p> */}
        </div>
      </section>
    </>
  );
}
