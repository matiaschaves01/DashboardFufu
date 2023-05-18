import SmallCard from './SmallCard';
import { useEffect, useState } from 'react';


let productInDataBase = {
    color:   "primary",
    titulo: "Cantidad de Productos",
    icono: "fas fa-film",
}

// let amount ={
//     color:   "success",
//     titulo: "No sabemos",
//     icono: "fas fa-award",
//     valor: 0
// }

let user = {
    color:   "warning",
    titulo: "Total de Usuarios",
    icono: "fas fa-user",
}


function ContentRowTop(){
    
    let [products , setProducts] = useState(productInDataBase)
    useEffect(()=>{
        
        fetch('http://localhost:3007/api/products')
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            setProducts({
                ...products,
                valor: data.length
            })
        })
        
    },[])

    let [users, setUsers] = useState(user)
    useEffect(()=>{
        
        fetch('http://localhost:3007/api/user')
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            setUsers({
                ...users,
                valor: data.length
            })
        })
        
    },[])
    
    let cardProps = [products,users];
    let arrayProps = [products]
    return (
        <>
            {/*<!-- Content Row -->*/}
            <div className="row">
                {
                    cardProps.map((producto,index)=>{
                        return <SmallCard  {...producto}  key= {index}/>
                    })
                }      
            </div>
        </>
    )
}
export default ContentRowTop;