import { useState, useEffect } from 'react';

export const useMaquillajes = () => {
  // estados para guardar los datos y saber si está cargando
  const [maquillajes, setMaquillajes] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerMaquillajes = async () => {
    try {
      setCargando(true); 
      const respuesta = await fetch('http://localhost:3000/api/maquillajes');
      const datos = await respuesta.json();
      setMaquillajes(datos);
    } catch (error) {
      console.error("Error al traer los maquillajes:", error);
    } finally {
      setCargando(false);
    }
  };

  // useEffect para que los datos se carguen apenas entramos a la página
  useEffect(() => {
    obtenerMaquillajes();
  }, []);

  // retornamos lo que los componentes visuales van a necesitar usar
  return { 
    maquillajes, 
    cargando, 
    obtenerMaquillajes 
  };
};