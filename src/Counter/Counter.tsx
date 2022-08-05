import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((count) => count + 1);
    };

    return (
        <div>
            <button onClick={increment}>+</button>
            <p>Count: {count}</p>
        </div>
    );
};

export default Counter;
