import { Activity } from "react";
import { Counter } from "./Counter.tsx";

interface ChaiCardProp {
    name: string;
    price: number;
    isSpecial?: boolean;
    minLimit?: number;
    maxLimit?: number;
}

export const ChaiCard = ({
    name,
    price,
    isSpecial = false,
    minLimit = 0,
    maxLimit = 5
}: ChaiCardProp) => {

    return (
        <div className="border border-amber-50 m-2 flex flex-col items-center justify-center rounded-md bg-zinc-800 text-white py-2 px-8">
            <h2>
                {name}
                <Activity mode={isSpecial ? "visible" : "hidden"}>
                    <span>⭐</span>
                </Activity>
            </h2>
            <p>{`Rs. ${price}`}</p>
            <Counter minLimit={minLimit} maxLimit={maxLimit} />
        </div>
    )
}