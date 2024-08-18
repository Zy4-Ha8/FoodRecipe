import styles from "./FoodCard.module.css"
export default function FoodCard({ item,setFoodId,FoodId }) {
    return <div className={styles.CardContainer}>
        <div className={styles.imageContainer}>
        <img className={styles.image} src={item.image} alt="" />
        </div>
        <h4 className={styles.title}>{item.title}</h4>
        <button onClick={()=>{
            setFoodId(item.id)
            console.log(FoodId)
        }}className={styles.viewBtn}>View The Recipe</button>
    </div>
}
