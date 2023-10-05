import { PropsWithChildren } from "react"
import { TextStyleContext } from "../../contexts/TextStyleContext"

export default function Button({ children }: PropsWithChildren) {
     return (
          <TextStyleContext.Provider value={{color: "white", fontSize: "14px", lineHeight: 1.25, fontWeight: "bold"}}>
               <button>{children}</button>
          </TextStyleContext.Provider>
     )
}