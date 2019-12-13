

class Recipes{
  constructor(props){
    super(props)
    this.state = {
      recipes:{
        name: ['Meatballs', 'Mac & Cheese']
      }
    }
  }

  render() {
    return(
      <div>
      const { recipes } = this.state
      let recipe = recipes.map(index => {
      })
        <ul>
        <li key={recipe.this.state.name}>{recipe.this.state.name}</li>
        <li>{recipe}</li>
        </ul>
    </div>
    )
  }
}
export default Recipes