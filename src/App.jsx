
import './App.css'
import Card from './components/Card'
import Tech from './components/Tech'

function App() {
  
 const me = {
   name: "Joel Parra",
   age: 52,
   favoriteMovie: "La vida es bella",
   favoiterMusic: "Rock 80"
 }

 const hobbies = {
    title: "Hobies",
    list: ['Pasear al campo', 'Ir al cine','Ir restaurante']
 }

 const favoriteFood = {
  title: "Comida Favorita",
  list: ['Cochino Asado', 'Camarones','Pescado frito']
 }

 const myStackTech = {
  title: "Mi Stack Tech",
  list: ['Html', 'Css','React']
 }

  return (
    <div className="App">
     
    <ul className='list list1'>
      <li className='list__item'><b>Nombre:</b>{me.name}</li>
      <li className='list__item'><b>Edad:</b>{me.age} años</li>
      <li className='list__item'><b>Pelicula Favorita:</b>{me.favoriteMovie}</li>
      <li className='list__item'><b>Musica Favorita:</b>{me.favoiterMusic}</li>
    </ul>
    
    <Card objInfo = {hobbies}/>
    
    <Card objInfo = {favoriteFood}/>

    
    <Tech techInfo = {myStackTech}/>
    
    </div>
  )
}

export default App
