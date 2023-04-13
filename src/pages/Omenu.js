import React, {useState} from 'react';
import CardKategory from "./Product/CardKategory";
import Productget from "./Product/Productget";
import "../pages/Stylshett/frist.css"
import {kategory} from "./Product/KategoryList";

function Omenu() {
    const [search, setSearch] = useState('')

    const seacrhProduct = kategory.map(item => item.products.filter(i => i.name.toLowerCase().includes(search.toLowerCase())))

    return (
        <div>
            <div className={"cold"} id={'search1'}
                 style={{marginLeft: '300px', marginTop: '-100px', position: 'absolute'}}>
                <input type="search" className="form-control "
                       placeholder={"Katalog bo'yicha qidirish"}
                       style={{height: "6vh", width: '600px', backgroundColor: 'lightgray'}}
                       aria-label="Dollar amount (with dot and two decimal places)" value={search}
                       onChange={e => setSearch(e.target.value)}/>
                <div className={"col-12"}>
                    <div className="col-5 input-group" style={{left: '570px', top: '-45px', height: '45px'}}>
                                            <span className="input-group-text bg-danger me-md-3"><i
                                                className="bi bi-search text-light me-4"></i></span>
                    </div>
                </div>
            </div>
            <div className={"col-12 d-flex mt-5"}>
                <div id="carouselExampleControls" className="carousel slide col-8 me-5 " style={{marginLeft: '30px'}}
                     data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-indicators mt-5">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-item active">
                            <img style={{borderRadius: '20px'}}
                                 src="https://olcha.uz/image/original/sliders/oz/PB4N04t5cRHsewA4yuiX3AQJVZLV1LTP4TSgd4RUAoSdJrJsjjYlw3sMtktT.png"
                                 className="d-block " alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                style={{borderRadius: '20px'}}
                                src="https://olcha.uz/image/original/sliders/oz/xnJMOueyHNatwhVr4dCXbaErjO0GbykIEUIRkG0pEMAugVzEqC4IxVvPcHGu.png"
                                className="d-block " alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                style={{borderRadius: '20px'}}
                                src="https://olcha.uz/image/original/sliders/oz/PXfohuX8XuA5rBnDeLGvcU6gYA2uDb9osUjGT0VfryoM4SPirR16fDhekpUC.png"
                                className="d-block " alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className={"row "} style={{border: "red", borderRadius: '20px'}}>

                </div>
                <div className={'col-3'}>
                </div>

            </div>
            <CardKategory/>
            {search.length===0?(
                <Productget categories={kategory} status={"not"}/>
            ):(
                <Productget categories={seacrhProduct} status={"search"}/>
            )}
            <CardKategory/>
        </div>
    );
}

export default Omenu;