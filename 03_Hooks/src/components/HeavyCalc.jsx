import { useMemo } from 'react'


const HeavyCalc = ({number}) => {
    const heavyCalcResult = useMemo(() => {
        return heavyOperation(number);
        
        
    }, [number]);
    return (
        <div>
            <h2>Result: {heavyCalcResult}</h2>
        </div>
    );
};

const heavyOperation = (num) => {
    console.log('Heavy Calculation succeded');
    return num * 10;
};

export default HeavyCalc;
