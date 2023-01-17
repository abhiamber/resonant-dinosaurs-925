import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);
export const CartContextProvider = ({ children }) => {
    const [cartLog, setCartLog] = useState(0);
    function toggleCartLog() {
        setCartLog(cartLog + 1)
    }
    return (
        <CartContext.Provider value={{ cartLog, toggleCartLog }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartLog = () => {
    return useContext(CartContext);
};