import { TextStyleContext } from "../../contexts/TextStyleContext"

export default function Article() {
     return (
          <TextStyleContext.Provider value={{color: "black", fontSize: "16px"}}>
               <p>sdfhklçctgnjltvgybhmk,l</p>
          </TextStyleContext.Provider>
     )
}