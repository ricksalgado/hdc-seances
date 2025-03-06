import {useState, useEffect, useDebugValue} from 'react'

export default function useWindowSize(){

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,

    });

    useEffect(() => {
        function handleResize(){
            setWindowSize({
                width: window.innerWidth,
                height: window.innerWidth,
            });
        }
// evento que dispara a funcao
        window.addEventListener('resize', handleResize);

        handleResize()

        // Limpeza de MEmoria
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize;
},