import { createContext,useState } from "react";

export const CartContext = createContext({
    productosAgregados:[]
})

export function CartContextProvider(props){
    const [productlist, setProductlist] = useState([])
    const [counter, setCounter] = useState([0])
    
    const addItem = (item,quantity)=>{
        setProductlist([...productlist,{item,quantity}]
        )
    }
    

    
    const removeItem = (item)=>{
        productlist.filter(p=>p === item.id)
    }

    const clear=()=>{
        setProductlist([])
        setCounter([0])
    }

   



    const context={
        productosAgregados:productlist,
        addItem: addItem,
        contador:{counter,setCounter},
        clear:clear,
        removeItem:removeItem
    }

    return(
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}