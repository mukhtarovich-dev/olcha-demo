import React from 'react';
import {kategory} from "./KategoryList";
import {Link} from "react-router-dom";

function CardKategory() {
    return (
        <div className={"col-6 d-flex mt-5 me-5"} style={{marginLeft:'50px'}}>
            {kategory.map( item=>(
            <Link to={`/kategory/${item.id}`} style={{border:"none"}}>
                <div className="card" style={{width: "10rem",border:"none"}}>
                    <img src={item.photo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">
                            {item.name}
                        </p>
                    </div>
                </div>
            </Link>
            ))}
        </div>
    );
}

export default CardKategory;
