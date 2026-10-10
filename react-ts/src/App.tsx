import './App.css'
import { Card } from './components/Card.tsx';
import { ChaiList } from './components/ChaiList.tsx';
import { OrderForm } from './components/OrderForm.tsx';
import { MyContext } from './MyContext.ts';
import type { Chai } from './types/chai.types.ts';

const menu: Chai[] = [
    { id: 1, name: "Masala Tea", price: 30 },
    { id: 2, name: "Ginger Tea", price: 50 },
    { id: 3, name: "Lemon Tea", price: 60 },
    { id: 4, name: "Black Tea", price: 20 },
];

function App() {
    return (
        <MyContext.Provider value={menu}>
            <div>
                <h1>Vite + React + TypeScript</h1>

                {/*
                <div className='flex justify-center'>
                    <ChaiCard name="hitesh sir" price={4000} />
                    <ChaiCard name="iphone" price={80000} />
                </div> 
                */}

                <div>
                    <ChaiList items={menu} minLimit={0} maxLimit={3} />
                    <OrderForm onSubmit={(order) => {
                        console.log(`Your order: ${order.type} with ${order.cups} cups`);
                    }} />
                </div>

                <Card
                    title='normalTxt'
                    className='m-10'
                    footer={<div>All rights are reserved.</div>}
                >Hello world</Card>
            </div>
        </MyContext.Provider>
    )
}

export default App
