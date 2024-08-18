import styles from './search.module.css'
import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const ApiKey = "6154ccca4e974edeb3277b27c54dc61c";
export default function Search({FoodObject, setFoodObject,setisLoading}) {
  const [query, setQuery] = useState("pasta");
  useEffect(() => {
    async function FetchData() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${ApiKey}`);
      const data = await res.json();
      console.log(data);
      setFoodObject(data.results);
      console.log(data);
      
      setisLoading(false)
    }
    FetchData();
  }, [query]);
  return (
    <div>
      <input className={styles.searchInp}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        type="text"
      />
    </div>
  );
}
