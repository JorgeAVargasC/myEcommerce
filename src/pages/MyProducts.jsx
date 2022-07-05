import React, { useContext, useEffect, useState } from "react";
import { get } from "../api";
import { authContext } from "../context/AuthContext";

export const MyProducts = () => {

    const [myProds, setMyProds] = useState([])

    const {user} = useContext(authContext);
    console.log(user.id)

    useEffect(() => {
    
        get(`/api/products/${user.id}`)
        .then(({data}) => {
            setMyProds(data)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    
    }, [setMyProds])
    
    

	return (
		<div className="mt-20">
			<h1>My Products</h1>

            {myProds?.map(myprod => {
                <p>{myprod.name}</p>
            })}
		</div>
	);
};
