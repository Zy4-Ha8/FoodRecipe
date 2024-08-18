import { useState } from "react"
import './App.css'
import Search from "./Component/Search"
import Nav from "./Component/Nav"
import Container from "./Component/Container"
import InnerContainer from "./Component/InnerContainer"
import FoodList from "./Component/FoodList"
import FoodDetails from "./Component/FoodDetails"
function App() {
const [FoodObject, setFoodObject] = useState([]) 
const [isLoading, setIsLoading] = useState(true)
const [FoodId, setFoodId] = useState('642583')
  return (
    <div  className="App">
      <Nav />
     <Search setisLoading={setIsLoading} FoodObject={FoodObject} setFoodObject={setFoodObject} />
     <Container>
      <InnerContainer>
        <FoodList setFoodId={setFoodId} FoodId={FoodId} FoodObject={FoodObject} isLoading={isLoading} />
      </InnerContainer>
      <InnerContainer>
        <FoodDetails C={isLoading} FoodId={FoodId} />
      </InnerContainer>
     </Container>
    </div>
  )
}

export default App
