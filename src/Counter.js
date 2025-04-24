import React, { useState } from "react";


function CounterApp(){

    const [count,setCount]=useState(0);

    return(
    
    <div>
        <h1>Counter App</h1>
        <p>
            Counter: {count}
        </p>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>


    </div>

    );
}

export default CounterApp;
