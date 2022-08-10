import { useState } from 'react'
import { DecimCount } from '../components/DecimCount'
import { ParOuImpar } from '../components/ParOuImpar'
import { Primo } from '../components/Primo'
import { RaizDeQ } from '../components/RaizDeQ'
import { RaizQuadrada } from '../components/RaizQuadrada'

export function Principal() {
  const [number, setNumber] = useState(0)
  

  return (
    <div>
      <header>
        <h2>{number}</h2>
        <input
          onChange={e => setNumber(e.target.value)}
          type={'number'}
          value={number}
        ></input>
      </header>
      <main>
        <ParOuImpar number={number}></ParOuImpar>
        <Primo number={number}></Primo>
        <DecimCount number={number}></DecimCount>
        <RaizQuadrada number={number}></RaizQuadrada>
        <RaizDeQ number={number}></RaizDeQ>
      </main>
    </div>
  )
}
