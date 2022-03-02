function Pokemon({name, img}) {
  return(
    <div>
      <img src={img} alt=""></img>
      <h2>{name}</h2>
    </div>
  )
}

export default Pokemon;