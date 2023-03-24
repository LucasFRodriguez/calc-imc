import './app.css'

export default function App(){
  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc.</span>
      
      <div className="area-input">
        <input 
          type="text"
          placeholder="Peso em (kg) Ex: 80"
        />
        <input 
          type="text"
          placeholder="Altura em (cm) Ex: 170"
        />

        <button>
          Calcular
        </button>
      </div>

      <h2>Seu IMC foi 25, Você esta abaixo do peso!</h2>

    </div>
  )
}