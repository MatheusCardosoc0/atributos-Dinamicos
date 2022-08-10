export function ParOuImpar(props){

  const ParImp = (n) =>{
    if(n % 2 == 0){
      return "Par"
    }
    else{
      return "Impar"
    }
  }

  return(
    <div>
      <h3>{ParImp(props.number)}</h3>
    </div>
  )
}