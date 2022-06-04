import { createContext, useEffect, useState } from "react";

export const MenuContexts = createContext();

function MenuContextsProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const btnHandleClick = () => setIsOpen(!isOpen);

    useEffect(() => {
        document.body.style.overflowY = isOpen ? "hidden" : "initial";
    }, [isOpen]);

    return (
        <MenuContexts.Provider value={{ isOpen, btnHandleClick }}>
            {children}
        </MenuContexts.Provider>
    );
}

export default MenuContextsProvider;
