import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {car} from "./CarList";

export default function AddCar() {

    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [probeg, setprobeg] = useState('')
    const [price, setprice] = useState('')

    const navigate = useNavigate()

    function addcar() {
        if (name.trim().length === 0) {
            return toast.warning('malumot kiriting')
        }
        const data = {id: car.length + 1, name, year, probeg: probeg}
        car.push(data)
        toast.success('saqlandi')
        navigate("/")
    }

    return (
        <div className="container">
            <h1 className="text-center text-primary"> add cars</h1>
            <input type={"text"} className="namecar" value={name} placeholder="mashina nomini kiriting"
                   onChange={e => setName(e.target.value)}/>
            <input type={"number"} className="year" value={year} placeholder="mashina yili kiriting"
                   onChange={e => setYear(e.target.value)}/>
            <input type={"number"} className="price" value={price} placeholder="mashina rarxini kiriting"
                   onChange={e => setprice(e.target.value)}/>
            <input type={"number"} className="probeg" value={probeg} placeholder="mashina qancha yuragnini kiriting"
                   onChange={e => setprobeg(e.target.value)}/>
            <button className="btn btn-primary" onClick={() => addcar()}> save</button>
        </div>
    );
}
