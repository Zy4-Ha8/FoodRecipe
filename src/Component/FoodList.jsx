import FoodCard from "./FoodCard";
import styles from "./FoodList.module.css"
export default function FoodList({setFoodId,FoodId, FoodObject, isLoading }) {
  return  <div className={styles.ListContainer}>
        
      {FoodObject.map((item)=><FoodCard setFoodId={setFoodId} FoodId={FoodId} item={item}/>)}
    </div>
  ;
}
