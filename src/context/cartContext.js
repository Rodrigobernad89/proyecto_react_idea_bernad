import { createContext,useState,useEffect } from "react";

export const CartContext = createContext({
    productosAgregados:[],
    addItem:()=>{},
    removeItem:()=>{}

})

export function CartContextProvider(props){
    const [productlist, setProductlist] = useState([])
    const [counter, setCounter] = useState([0])

    useEffect(() => {
        console.log('items',productlist);
    }, [productlist])
    
    const addItem = (item)=>{
        setProductlist((prevItems) => {
            return prevItems.concat(item)
        })
    }
    

    
    const removeItem = (itemId)=>{
        setProductlist((prevItems) =>{
            return prevItems.filter(p=>p.id !== itemId)
        })
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