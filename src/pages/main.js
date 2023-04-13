import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {car} from "./CarList";

export default function Main() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [probeg, setprobeg] = useState('')
    const [price, setprice] = useState('')
    const navigate = useNavigate()

    function deleteCar() {
        let a = ""
        car.map(item => {
            if (item.id === id) {
                car.pop(item)
                a = "a"
            }
        })
        if (a === "a") {
            toast.success("o'chirildi")
            navigate("/")
        }
    }


    function editCar() {
        let a = ""
        car.map(item => {
            if (item.id === id) {
                item.name = name
                item.price = price
                item.probeg = probeg
                item.year = year
                a = "a"
            }
        })
        if (a === "a") {
            toast.success("taxrirlandi")
            navigate("/")
        }
    }

    return (
        <div className="container-sm b-color:danger">
            <div className="box">
                <div className="car p-3">
                    <Link to={"/car/add"} className="btn btn-primary"> <i className="bi bi-apple"/></Link>
                    <div className="col">
                        <h1 className="text-center text-primary">cars</h1>
                    </div>
                    <div className="col p-3">
                        <table class="table">
                            <thead class="table-dark">
                            <tr>
                                <th>T/r</th>
                                <th>Nomi</th>
                                <th>yili</th>
                                <th>probeg</th>
                                <th>narxi</th>
                                <th>update/delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {car.map((item, i) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.year}</td>
                                    <td>{item.price}</td>
                                    <td>{item.probeg}</td>
                                    <td>{<div class="dropdown">
                                        <button class="btn btn-primary   dropdown-toggle" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            update/delete
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className=" btn btn-warning" data-bs-toggle="modal"
                                                   data-bs-target="#exampleModal" href="#"
                                                   onClick={() => setId(item.id)}>update</a></li>
                                            <br/>
                                            <li><a className="btn btn-danger " data-bs-toggle="modal"
                                                   data-bs-target="#exampleModaldelete" href="#"
                                                   onClick={() => setId(item.id)}> delete</a></li>
                                        </ul>
                                    </div>}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Car</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <input type={"text"} className="namecar" value={name} placeholder="mashina nomini kiriting"
                                   onChange={e => setName(e.target.value)}/>
                            <input type={"number"} className="year" value={year} placeholder="mashina yili kiriting"
                                   onChange={e => setYear(e.target.value)}/>
                            <input type={"number"} className="price" value={price}
                                   placeholder="mashina rarxini kiriting" onChange={e => setprice(e.target.value)}/>
                            <input type={"number"} className="probeg" value={probeg}
                                   placeholder="mashina qancha yuragnini kiriting"
                                   onChange={e => setprobeg(e.target.value)}/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                    onClick={() => editCar()}>Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModaldelete" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">delete Car</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div class="modal-body">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                    onClick={() => deleteCar()}>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}