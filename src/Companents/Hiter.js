import React from 'react';
import {Link} from "react-router-dom";

function Hiter() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light ">
                <div className="container-fluid justify-content-start bg-danger pt-2">
                    <div className={"col-6"}>
                        <Link to={"/button/0prosent"} className="btn btn-light mb-3 me-2 text-danger" type="button"> 0%
                            MUddatli to'lov</Link>
                        <Link to={"/button/chegirmalar"} className="btn btn-sm btn-outline-light mb-3 me-2" type="button"> Chegirmalar</Link>
                        <Link to={"/button/yutuqli/oyin"} className="btn btn-light mb-3 text-danger me-3" type="button">Yutuqli o'yinlar</Link>
                        <Link to={"/button/xarita"} className="btn btn-sm btn text-light mb-3 me-5" type="button"> Sayt haritasi</Link>
                    </div>
                    <div className={"d-flex align-items-end justify-content-end col-6"}>
                        <h3 className={"cold-6 me-4 text-light"}>+998 77 070 00 70</h3>
                        <Link to={"/button/sotish"} className="btn btn-sm btn-outline-light mb-2 me-5"
                              type="button"> Olchada soting</Link>
                        <h5 className={"col-1 text-light"}>Узб </h5>
                        <h5 className={"col-1 text-light"}>O'zb </h5>
                        <h5 className={"col text-light"}> Рус</h5>

                    </div>
                </div>

            </nav>
        </div>
    );
}

export default Hiter;