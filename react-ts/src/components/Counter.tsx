import { useState } from "react"

interface CounterProps {
    minLimit?: number;
    maxLimit?: number;
};

export const Counter = ({ minLimit=0, maxLimit=10 }: CounterProps) => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <p>Counter: {count}</p>
            <button
                className="bg-zinc-400 rounded-md p-0.5 m-1 text-white text-sm"
                onClick={() => setCount(prev => Math.min(prev + 1, maxLimit))}
                disabled={count >= maxLimit}
            >Add</button>
            <button
            className="bg-zinc-400 rounded-md p-0.5 m-1 text-white text-sm"
                onClick={() => setCount(prev => Math.max(prev - 1, minLimit))}
                disabled={count <= minLimit}
            >Remove</button>
        </div>
    )
}