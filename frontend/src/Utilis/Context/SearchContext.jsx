import { useState } from "react"
import { createContext } from "react"

export const SearchContext = createContext()

export default function SearchContextProvider({ children }) {
    const [urlQuery, setUrlQuery] = useState({})
    const toggleUrlQuery = (x) => {
        setUrlQuery(x)
    }
    return <SearchContext.Provider value={{ urlQuery, toggleUrlQuery }}>
        {children}
    </SearchContext.Provider>
};