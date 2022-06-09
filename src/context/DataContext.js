import { createContext, useState } from "react";


export const DataContext = createContext()

let dataFixed = 'marvel'

export const DataProvider = ({children})=> {
    
    const [ data, setData ] = useState(dataFixed)

    return(
        <DataContext.Provider value={{
            data,
            setData
        }} >
            {children}
        </DataContext.Provider>
    )
}