import React, { useState } from "react";


function CounterApp(){

    const [count,setCount]=useState(0);
    

    const handleIncrement=()=>{
        setCount(count+1);
    };
    const handleDecrement=()=>{
        setCount(count-1);
    };

    return(
    
    <div>
        <h1>Counter App</h1>
        <p>
            Counter: {count}
        </p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>


    </div>

    );
}

export default CounterApp;
