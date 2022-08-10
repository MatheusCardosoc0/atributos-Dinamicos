export function RaizQuadrada(props){

  const Raiz = (n) =>{
    var raz = Math.sqrt(n)
    return raz
}

  return(
    <div>
      <h3>{Raiz(props.number)}</h3>
    </div>
  )
}