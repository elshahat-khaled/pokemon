export interface TypeList {
    count: number
    next: any
    previous: any
    results: PokemonType[]
  }
  
  export interface PokemonType {
    name: string
    url: string
  }