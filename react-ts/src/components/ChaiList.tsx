import type { Chai } from "../types/chai.types.ts";
import { ChaiCard } from "./ChaiCard.tsx";

interface ChaiListProps {
    items: Array<Chai>;
    minLimit?: number;
    maxLimit?: number;
}

export const ChaiList = ({ items, minLimit, maxLimit }: ChaiListProps) => {

    return (
        <div className="m-20">
            <h1>ChaiList</h1>

            <div className="flex flex-wrap justify-center items-center">
                {items.map(chai =>
                    <ChaiCard
                        key={chai.id}
                        name={chai.name}
                        price={chai.price}
                        isSpecial={chai.price > 1000}
                        minLimit={minLimit}
                        maxLimit={maxLimit}
                    />
                )}
            </div>
        </div >
    )
}
