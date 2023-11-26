function MyRecipesComponent({label, type, image, diet, ingredients, calories}) {
    return (
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="container">
            <h3>({type} cuisine)</h3>
            </div>
            <div className="container">
                <img src={image} alt="dish"/>
            </div>
           
            <ul className="container list">
                {ingredients.map ((ingredient, index) => (
                    <li key={index}><img src="https://img.icons8.com/?size=48&id=brWmrA4--NST&format=png" className="icon" alt="strawberry"/> {ingredient}</li>
                ))}
            </ul>
            <div className="container">
                <p>{calories.toFixed()} calories</p>
            </div>
            <ul className="container list">
                {diet.map (item => (
                    <li><img src="https://img.icons8.com/?size=48&id=G2I4PFiUqwRV&format=png" className="icon" alt="diet"/>{item}</li>
                ))}
            </ul>


        </div>
    )
}
export default MyRecipesComponent;