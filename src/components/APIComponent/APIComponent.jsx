import React from 'react';
import { useState, useEffect } from 'react';
import UserCard from "../UserCard/UserCard.jsx"

const APIComponent = () =>{

    const [items, setItems] = useState([])

    useEffect ( () =>{
        fetch('https://api.agnieszkaswiatly.com/v1/public/catalogues/e59e7e10-73dc-4d6a-b8ef-1260df3d6572')
        .then (result => result.json())
        .then (data => {
            console.log(data.items)
            setItems(data.items)
        })
        
        },
        []
    );
        
    

    return(

        <div className="flex flex-wrap justify-between gap-4">
            {items.map(item => (
                <UserCard key={item.id} user={item} />
            ))}
        </div>

    )
}



export default APIComponent
