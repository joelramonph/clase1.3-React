
import './App.css'
import Card from './components/Card'


function App() {
  
 const me = {
   name: "Joel Parra",
   age: 51,
   favoriteMovie: "La vida es bella",
   favoriteMusic: "Rock 80"
 }

 const hobbies = {
    title: "Hobies",
    list: ['Pasear al campo', 'Ir al cine','Ir restaurante'],
    number: 2
 }

 const favoriteFood = {
  title: "Comida Favorita",
  list: ['Cochino Asado', 'Camarones','Pescado frito'],
  number: 3
 }

 const myStackTech = {
  title: "Mi Stack Tech",
  list: ['Html', 'Css','React'],
  number: 4
 }

  return (
    <div className="App">
     
    <ul className='list list1'>
      <li className='list__item'><b>Nombre:</b>{me.name}</li>
      <li className='list__item'><b>Edad:</b>{me.age} años</li>
      <li className='list__item'><b>Pelicula Favorita:</b>{me.favoriteMovie}</li>
      <li className='list__item'><b>Musica Favorita:</b>{me.favoriteMusic}</li>
    </ul>
    
    <Card objInfo = {hobbies}/>
    
    <Card objInfo = {favoriteFood}/>

    <Card objInfo = {myStackTech}/>
    
    </div>
  )
}

export default App
