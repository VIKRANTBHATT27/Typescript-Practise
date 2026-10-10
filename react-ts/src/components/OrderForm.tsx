import React, { useState } from 'react'

interface OrderFormProps {
    onSubmit(order: { type: string; cups: number }): void
}

export const OrderForm = ({ onSubmit }: OrderFormProps) => {

    const [type, setType] = useState<string>("lemon tea");
    const [cups, setCups] = useState<number>(0);

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit({ type, cups });
    }

    return (
        <div>
            <h1>Place Your Order</h1>
            <form className='text-gray-200' onSubmit={handleSubmit}>
                <div className='mb-2 text-lg'>
                    <label htmlFor="Chai" className='mr-2'>Type: </label>
                    <select
                        name="chaiType"
                        id="Chai"
                        value={type}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setType(e.target.value)}
                    >
                        <option value="lemon tea">Lemon Tea</option>
                        <option value="masala tea">Masala Tea</option>
                        <option value="ginger tea">Ginger Tea</option>
                        <option value="black tea">Black Tea</option>
                    </select>
                </div>

                <div className='mb-2 text-lg'>
                    <label htmlFor="Qty" className='mr-2'>Qty: </label>
                    <input
                        type="number"
                        name="quantity"
                        id="Qty"
                        min={0}
                        max={5}
                        defaultValue={0}
                        className='bg-zinc-500/90 w-20 text-center'
                        value={cups}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value))}
                    />
                </div>

                <button
                    type="submit"
                    className='bg-yellow-500/90 px-2 py-1 text-sm rounded-xl cursor-pointer'>
                    Place Order
                </button>
            </form>
        </div>
    )
}