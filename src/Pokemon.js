function Pokemon({name, img}) {
  return(
    <div>
      <img src={img} alt=""></img>
      <h2 class="font-bold text-center">{name}</h2>
    </div>
  )
}

export default Pokemon;