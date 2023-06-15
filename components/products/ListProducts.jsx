import product from '@/backend/models/product';
import React from 'react';

const getProducts = async () => {

    const { data } = await axios.get('http://localhost:3000/api/products')
    return data;
}


export default function ListProducts({ data }) {
    console.log(data);
    return (
        <div>ListProducts</div>
        /*
        
        <main className='md:w-2/3 lg:w-3/4 px-3'>
            {
               data?.products?.map( (product) => {
                 <  
                   
               }
               )     
            }    

        </main>  */
    );

};


