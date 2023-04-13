import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {kategory} from "./KategoryList";
function Kategoryget() {
    const id = useParams().id
    const [kategory1, setKategory] = useState([])
    function getoneKategory() {
        kategory.map(item => {
            if (item.id === parseInt(id)) {
                setKategory(item.products)
            }
        })
    }
    useEffect(() => {
        getoneKategory()
    }, [])
    return (
        <div className="container">
            <div className="row mb-5" style={{marginLeft: '10px', border: "none"}}>
                {kategory1.map(item =>(
                    <Link to={`/product/${item.name}`} className={"m-2 text-center text-dark"}
                          style={{width: '30%', height: '60vh', position: 'relative'}}>
                        <div className="card col-sm-6" style={{width: '100%', height: '100%'}}>
                            <button style={{backgroundColor: 'white', border: 'none', position: 'absolute'}} ><i
                                className="bi bi-heart"></i>
                            </button>
                            <img src={item.photo} style={{width: '100%', height: '100%'}} className="card-img-top " alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"> {item.name}</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
        ;
}

export default Kategoryget;