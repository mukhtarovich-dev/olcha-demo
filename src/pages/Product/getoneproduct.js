import React, {useEffect, useState} from 'react';
import {kategory} from "./KategoryList";
import {useParams} from "react-router-dom";

function Getoneproduct() {
    const id = useParams().id
    const [kategory1, setKategory] = useState([])

    function getoneproduct() {
        kategory.map(item => {
            item.products.map(i => {
                if (i.name === id) {
                    setKategory(i)
                }
            })
        })
    }

    useEffect(() => {
            getoneproduct()
        }
        , []
    )
    return (
        <div >
            <div className="card mb-3 " style={{maxWidth: "10400px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={kategory1.photo} className="img-fluid rounded-start" style={{height:'700px',width:'1040px'}} alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title mt-5">{kategory1.name}</h5>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Getoneproduct;