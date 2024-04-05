import './App.css'
import avatarJessica from "../public/avatar-jessica.jpeg"

function App() {

  return (
    <>
      <div class="Container">
    <div class="Perfil" id="perfilOriginal">
      <div class="Imagen">
        <img src={avatarJessica}/>
      </div>
      <div class="Name">Jessica Randall</div>
      <div class="lugar">London, United Kingdom</div>
      <br />
      <br />
      <div class="Ocupacion">"Front-end developer and avid reader."</div>
      <div class="button-container">
        <button>GitHub</button>
        <button>Frontend Mentor</button>
        <button>LinkedIn</button>
        <button>Twitter</button>
        <button>Instagram</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
