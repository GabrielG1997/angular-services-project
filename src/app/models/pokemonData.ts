export type PokemonData ={
  sprites: {front_default:string},
  name:string,
  id:number
  types:{
    slot:string,
    type:{
      name:string,
      url:string
    }
  }[]
}
