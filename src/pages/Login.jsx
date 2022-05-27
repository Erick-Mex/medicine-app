import { useState, useRef } from 'react';
import { useAuth } from '../context/AuthProvider';
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { logIn } = useAuth();
  const [Error, setError] = useState(false);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(false);
      setLoading(true);
      await logIn(email.current.value.toLowerCase(), password.current.value);
      navigate('/dashboard');
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <div
      className={`w-96 h-80 bg-white top-1/2 left-1/2 absolute box-border drop-shadow-lg ${styles.loginBox} px-10 py-20`}
    >
      <FaUserCircle className={styles.avatar} size={112}/>
      <form onSubmit={handleSubmit} >
        <p className="p-0 font-bold">Correo</p>
        <input
          className={`w-full mb-3 outline-none border-b-2  ${Error ? "border-b-red-600" : "border-b-stone-300"}`}
          type="email"
          ref={email}
          placeholder="Ingresa un correo electronico"
          required
        />

        <p className="p-0 font-bold">Constrase&#241;a</p>
        <input
          className={`w-full outline-none border-b-2 ${Error ? "border-b-red-600" : "border-stone-300"}`}
          type="password"
          ref={password}
          placeholder="Ingresa la contraseña"
          required
          
        />

        {Error && <div className="text-red-600 mt-2">El correo o la contrase&#241;a son incorrectos</div>}

        <button
          disabled={Loading}
          className="bg-purple-500 mt-2.5 rounded-full py-2 text-white w-full hover:bg-purple-600"
          type="submit"
        >
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
}
