import './App.css';
import { useMaquillajes } from './hooks/useMaquillajes';

function App() {
  const { maquillajes, cargando } = useMaquillajes();

  return (
    <div className="contenedor-principal">
      <h1>Catálogo de Maquillaje</h1>
      
      <div className="seccion-lista">
        <h2>Productos Disponibles</h2>
        
        {/* Usamos el estado de carga que armamos en el hook */}
        {cargando ? (
          <p>Cargando productos...</p>
        ) : (
          <ul>
            {maquillajes.map((producto) => (
              <li key={producto.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <strong>{producto.nombre}</strong> - {producto.marca} 
                <br/>
                Categoría: {producto.categoria} | Precio: ${producto.precio}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;