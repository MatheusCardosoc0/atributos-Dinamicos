export function RaizDeQ(props){

  const RaizDe = (n)=>{
    const raz = n * n
    return raz
  }


  return(
    <div>
      <h3>{RaizDe(props.number)}</h3>
    </div>
  )
}