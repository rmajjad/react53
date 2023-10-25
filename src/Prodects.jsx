import React from 'react'
import Prodect from './Prodect.jsx';
export default function Prodects() {
    const products = [
        {id:1,title:'product one',desc:'this is product one',price:1000},
        {id:2,title:'product two',desc:'this is product two',price:2000},
        {id:3,title:'product three',desc:'this is product three',price:3000},
    ];
        return (
        <>
            <div className='container my-5'>
                <div className='row text-center '>
                    {
                        products.map((product) =>{
                            return <Prodect {...product} key = {products.id} />
                        })
                    }
                    </div>
                </div>
            
        </>
    )
}
