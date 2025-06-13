import './App.css'
import Tarjeta from './components/tarjeta/Tarjeta'

const nombre = "Saul Hernandez";
const profesion = "Desarrolladora Web";
const mensaje = "¡Mi primer proyecto de React!";


function App() {
  return (
    <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center'}}>
      <h1>Tarjeta de presentación</h1>
      <Tarjeta  nombre={nombre} profesion={profesion} mensaje={mensaje}/>
    </div>
  )
}

export default App
