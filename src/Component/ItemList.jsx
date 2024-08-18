import Item from "./Item";

export default function ItemList({Recipe,isLoading}){
    return <div>
        {isLoading? 'is loading':Recipe.extendedIngredients.map((item)=>
            <Item item={item} />
        )}
    </div>
}