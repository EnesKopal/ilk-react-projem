import Myimage from './assets/images.jpeg'
import './App.css'

function App() {

  return (
    <>
      <h1>Portfolyo</h1>
      <div>      
          <img src={Myimage} className="img-style" alt="Vite logo"/>
      </div>
      <h1>Hayatım</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo id repellat laborum similique ipsa, cum pariatur ipsam quis nesciunt quidem, atque minima exercitationem minus asperiores! Eveniet voluptatum dolores dicta eos!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde nulla recusandae aspernatur maxime dolore et consectetur architecto debitis? Fuga consequatur omnis ex natus quam eaque est fugit inventore nisi!</p>
      <div className="card">
      </div>
        <h2>Hobilerim</h2>
        <ul>
        <li>
          Futbol
        </li>
        <li>
            Kodlama
        </li>
        <li>
          Basketbol
        </li>
      </ul>
      
      <p className="read-the-docs">
          Powered By Emre Bilici
      </p>
       
    </>
  )
}

export default App
