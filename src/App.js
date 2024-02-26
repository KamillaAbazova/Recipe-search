import { useEffect, useState } from 'react';
import './App.css';
import video from './recipes.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("lemon");


  useEffect(() => {
    const getRecipe = async() => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=8663932d&app_key=43933138076193b7e27659ef9cb8aaef`);
      const data = await response.json();
      console.log(data);
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    console.log(e.target.value)
    setMySearch(e.target.value);
  }
  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);

  }
  return (
    <div className='App'>
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type='video/mp4'/>
        </video>
        <h1>Recipe search</h1>
      </div>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
        </form>
      </div>
      <div className='container'>
        <button onClick={finalSearch}>
          <img src='https://img.icons8.com/?size=80&id=suPCQadP4spv&format=png' alt='icon'/>
        </button>
      </div>
      {myRecipes.map((element,index) => (
        <MyRecipesComponent key={index} label = {element.recipe.label} type = {element.recipe.cuisineType} image = {element.recipe.image} diet = {element.recipe.dietLabels} calories = {element.recipe.calories} ingredients = {element.recipe.ingredientLines}/>
      ))}
      
    </div>
  );
}

export default App;
