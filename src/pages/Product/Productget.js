import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import '../Stylshett/frist.css';

function Productget({categories, status}) {
    const [like, setLike] = useState("")
    const [product, setProduct] = useState({})

    const getOneProduct = (name) => {
        categories.map(ite => {
            ite.products.map(item => {
                if (name === item.name) {
                    setProduct(item)
                }
            })
        })
    }


    return (
        <div className={'mt-5'}>
            <div className={"row outline-light"} style={{width: '100%', border: "none"}}>
                {status === "search" ? (
                    categories.map(products => (
                        <div className={"m-2 text-center text-dark"}
                             style={{width: '30%', height: '60vh', position: 'relative', zIndex: '10'}}>
                            <button className="btn btn-sm btn-danger  me-2" type="button"
                                    style={{top: '1px', right: '5px', position: 'absolute', zIndex: '20'}}
                                    onClick={products.isLike = !products.isLike}>
                                <i className={"bi bi-heart"}></i>
                            </button>
                            <Link to={`/product/${products.name}`} id={'salom1'}>
                                <div className="card col-sm-6 text-dark"
                                     style={{width: '100%', height: '100%', textDecoration: 'none'}}>
                                    <button
                                        style={{backgroundColor: 'white', border: 'none', position: 'absolute'}}>
                                    </button>
                                    <img src={products.photo}
                                         style={{width: '40%', height: '50%', marginLeft: '120px'}}
                                         className="card-img-top " alt="..."/>
                                    <h5 className="card-title"> {products.name}
                                        <br/>
                                        <h5 className={'mt-4'}>
                                            {products.price}
                                        </h5>
                                    </h5>
                                    <div className="card-body">
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                            </Link>
                            <button type="button" id={'salom'} className="btn btn-outline-danger mb-5"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    onClick={() => getOneProduct(products.name)}
                                    style={{
                                        bottom: '-30px',
                                        right: '30px',
                                        position: 'absolute',
                                        width: '65%',
                                        height: '8%'
                                    }}>Kredit
                            </button>
                            <button type="button" id={'salom'} className="btn btn-outline-dark mb-5"
                                    style={{
                                        bottom: '-30px',
                                        right: '350px',
                                        position: 'absolute',
                                        width: '15%',
                                        height: '8%'
                                    }}>
                                <i className="bi bi-cart"></i>
                            </button>
                        </div>

                    ))
                ) : (
                    categories.map(ite => (
                        ite.products.map(products => (
                            <div className={"m-2 text-center text-dark"}
                                 style={{width: '30%', height: '60vh', position: 'relative', zIndex: '10'}}>
                                <button className="btn btn-sm btn-danger  me-2" type="button"
                                        style={{top: '1px', right: '5px', position: 'absolute', zIndex: '20'}}
                                        onClick={products.isLike = !products.isLike}>
                                    <i className={"bi bi-heart"}></i>
                                </button>
                                <Link to={`/product/${products.name}`} id={'salom1'}>
                                    <div className="card col-sm-6 text-dark"
                                         style={{width: '100%', height: '100%', textDecoration: 'none'}}>
                                        <button
                                            style={{backgroundColor: 'white', border: 'none', position: 'absolute'}}>
                                        </button>
                                        <img src={products.photo}
                                             style={{width: '40%', height: '50%', marginLeft: '120px'}}
                                             className="card-img-top " alt="..."/>
                                        <h5 className="card-title"> {products.name}
                                            <br/>
                                            <h5 className={'mt-4'}>
                                                {products.price}
                                            </h5>
                                        </h5>
                                        <div className="card-body">
                                            <p className="card-text"></p>
                                        </div>
                                    </div>
                                </Link>
                                <button type="button" id={'salom'} className="btn btn-outline-danger mb-5"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        onClick={() => getOneProduct(products.name)}
                                        style={{
                                            bottom: '-30px',
                                            right: '30px',
                                            position: 'absolute',
                                            width: '65%',
                                            height: '8%'
                                        }}>Kredit
                                </button>
                                <button type="button" id={'salom'} className="btn btn-outline-dark mb-5"
                                        style={{
                                            bottom: '-30px',
                                            right: '350px',
                                            position: 'absolute',
                                            width: '15%',
                                            height: '8%'
                                        }}>
                                    <i className="bi bi-cart"></i>
                                </button>
                            </div>

                        ))
                    ))
                )
                }
                <div className="modal fade" id="exampleModal" tabIndex="-1"
                     aria-labelledby="exampleModalLabel"
                     aria-hidden="true" style={{position: 'absolute'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img src={product.photo}
                                     style={{width: '40%', height: '50%', marginLeft: '120px'}}
                                     className="card-img-top " alt="..."/>
                                <h5 className="card-title"> {product.name}</h5>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default Productget;