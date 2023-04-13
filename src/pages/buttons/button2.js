import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {kategory} from "../Product/KategoryList";

function Button2() {
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
        <div>
            <h1>
                Muddatli to'lov
            </h1>
            <div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        Smartfon, telefon, gadjet, aksessuarlar
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">smartfonlar</a></li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <h1>
                    {kategory1.name}
                </h1>
                <div className="row" style={{marginLeft:'10px',border:"none"}}>
                    {kategory1.map(item => (
                        <Link to={`/product/${item.name}`} className={"m-2 text-center text-dark " } style={{width: '30%', height: '60vh'}}>
                            <div className="card col-sm-6" style={{width: '100%', height: '100%'}}>
                                <img src={item.photo} style={{width: '100%', height: '100%'}} className="card-img-top "
                                     alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title"> {item.name}</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Button2;