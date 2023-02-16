import { useEffect, useState } from "react"
import FizzBuzzDisplay from "./FizzzBuzzDisplay";

const Compteur1 = () => {

    const [count, setCount] = useState<number>(0);

    return (
      <>
        <div className="conteneur">
        <h1>FizzBuzz</h1>
        <hr />
        <div className="compteur_conteneur">
        <span className="num"><FizzBuzzDisplay value={count} />
        </span>
        <button className="btnmoins" onClick={() => setCount(count - 1)} disabled={count<=0}>&minus;</button>
        <button className="btnplus" onClick={() => setCount(count + 1)}>&#x2B;</button>
        </div>
        </div>
      </>
    )
  }
  
  export default Compteur1