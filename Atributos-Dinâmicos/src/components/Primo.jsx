export function Primo(props){

  const PrimNum = (n) =>{
    for (let i = 2; i < n; i++) {
      if(n % i == 0){
        return 'Não é primo'
      }
    }
    return 'É primo'
  }

  return(
    <div>
      <h3>{PrimNum(props.number)}</h3>
    </div>
  )
}