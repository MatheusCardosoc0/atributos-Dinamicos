export function DecimCount(props){

  const Count = (n) =>{
    var strinnum = String(n)
    return `${strinnum.length}`
  }

  return(
    <div>
      <h3>{Count(props.number)}</h3>
    </div>
  )
}