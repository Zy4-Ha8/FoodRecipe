import { useEffect, useState } from "react";
import styles from "./FoodDetails.module.css";
import ItemList from "./ItemList";
export default function FoodDetails({ FoodId }) {
  const [Recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function FetchDetails() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${FoodId}/information?apiKey=6154ccca4e974edeb3277b27c54dc61c`
      );
      const data = await res.json();
      console.log(data);
      setRecipe(data);
      console.log(Recipe.analyzedInstructions);
      setIsLoading(false);
    }
    FetchDetails();
  }, [FoodId]);
  return (
    <div className={styles.parentDailts}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={Recipe.image} alt="" />
      </div>
      <h2 className={styles.title}>{Recipe.title}</h2>
      <div className={styles.info}>
        <div>
          <strong>⏰ready in {Recipe.readyInMinutes} minutes</strong>
        </div>
        <div>
          <strong>👯serving {Recipe.servings}</strong>
        </div>
        <div>
          <strong>
            {Recipe.vegetarian ? "🥕 vegetarian" : "🍖 not vegetarian"}
          </strong>
        </div>
        <div>
          <strong>{Recipe.vegan ? "🐮 vagan" : ""}</strong>
        </div>
      </div>
      <div className={styles.pricePerServing}>$ {Recipe.pricePerServing / 10}</div>
      <h2 className={styles.IngredientHeader}>Ingredient</h2>
      <div>
        <ItemList isLoading={isLoading} Recipe={Recipe}/>
      </div>
      <div  className={styles.Instruction}>
      <h2>Insutraction</h2>
        <ol>
          {isLoading
            ? "is loading"
            : Recipe.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))}
        </ol>
      </div>
    </div>
  );
}
