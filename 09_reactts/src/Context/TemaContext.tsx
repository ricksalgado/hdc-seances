import { createContext, useState, ReactNode, children } from "react";

type Tema = "claro" | "escuto";

interface TemaContexto {
    tema: Tema;
    alterarTema: () => void;
}

export const TemaContext = createContext<TemaContexto | null>(null);

interface TemaProviderProps{
    children: ReactNode;
}

export const TemaProvider = ({ children }: TemaProviderProps) => {
    const [tema, setTema] = useState<Tema>("claro");

    const alterarTema = () => {
        setTema((temaAtual) => (temaAtual === "claro" ? "escuto" : "claro") );
    };


    return (
        <TemaContext.Provider value={{tema, alterarTema}}>
            {children}
        </TemaContext.Provider>
    )
};