import * as convert from 'convert-units'
console.log(convert)

interface RecipeProps {
  title: string
}

{}

interface Ingredient {
  name: string
  unit: convert.Unit
}

class Recipe {
  constructor (recipeProps: RecipeProps) {

  }
}

export default Recipe