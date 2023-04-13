import React from 'react';
import button from "bootstrap/js/src/button";
import "../pages/Stylshett/frist.css"
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <div id={"navbar"} style={{position:'relative',width:'100%'}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <svg  className={"col-1 me-3"} xmlns="http://www.w3.org/2000/svg" width="102" height="30"
                         viewBox="0 0 102 30" fill="none">
                        <path
                            d="M0 18.8909V18.8103C0 12.6348 5.08749 7.62137 11.937 7.62137C18.7464 7.62137 23.7895 12.5547 23.7895 18.7302V18.8103C23.7895 24.9857 18.7043 30 11.8545 30C5.0471 30 0 25.0642 0 18.8909ZM26.5361 3.04948C26.5361 1.36637 27.9309 0 29.6531 0C31.3767 0 32.7693 1.36637 32.7693 3.04948V26.7111C32.7693 28.395 31.3767 29.7589 29.6531 29.7589C27.9309 29.7589 26.5361 28.395 26.5361 26.7111V3.04948ZM35.5172 18.8909V18.8103C35.5172 12.6743 40.3158 7.62137 47.0428 7.62137C50.3646 7.62137 52.7027 8.50448 54.5486 10.0269C54.9601 10.3472 55.5323 11.0713 55.5323 12.1129C55.5323 13.6361 54.2619 14.8407 52.7027 14.8407C51.882 14.8407 51.2675 14.5187 50.8981 14.2384C49.7904 13.3964 48.6427 12.8745 47.0029 12.8745C43.8845 12.8745 41.6686 15.5628 41.6686 18.7302V18.8103C41.6686 22.0994 43.8441 24.7466 47.2475 24.7466C48.8895 24.7466 50.1598 24.183 51.3499 23.2631C51.6787 23.0193 52.2932 22.6995 53.0314 22.6995C54.5068 22.6995 55.6571 23.8632 55.6571 25.3077C55.6571 26.1108 55.2871 26.7503 54.7536 27.233C52.9092 28.875 50.571 30 46.9609 30C40.3579 30 35.5172 25.0269 35.5172 18.8909ZM58.7722 3.04948C58.7722 1.36637 60.167 0 61.8889 0C63.6128 0 65.0051 1.36637 65.0051 3.04948V11.0696C66.4407 9.26609 68.2866 7.62164 71.4457 7.62164C76.1618 7.62164 78.9111 10.6697 78.9111 15.6006V26.7111C78.9111 28.395 77.5143 29.7589 75.7927 29.7589C74.0705 29.7589 72.6762 28.395 72.6762 26.7111V17.5259C72.6762 14.6391 71.2811 13.1551 68.9028 13.1551C66.5223 13.1551 65.0051 14.6391 65.0051 17.5259V26.7111C65.0051 28.395 63.6128 29.7589 61.8889 29.7589C60.167 29.7589 58.7722 28.395 58.7722 26.7111V3.04948ZM81.7808 23.3407V23.2623C81.7808 18.5689 85.4314 16.4045 90.6394 16.4045C92.8528 16.4045 94.4543 16.7657 96.011 17.2857V16.9261C96.011 14.3986 94.412 12.9957 91.2952 12.9957C89.5716 12.9957 88.1765 13.2349 86.9889 13.598C86.6189 13.7179 86.3727 13.7573 86.0854 13.7573C84.6507 13.7573 83.5024 12.6737 83.5024 11.2709C83.5024 10.1876 84.1989 9.26582 85.1828 8.90407C87.1507 8.18195 89.2841 7.78181 92.1984 7.78181C95.6021 7.78181 98.0625 8.66492 99.622 10.1876C101.261 11.7926 102 14.1594 102 17.0457V26.832C102 28.4768 100.647 29.76 98.9654 29.76C97.1593 29.76 95.9692 28.5157 95.9692 27.2325V27.1927C94.4543 28.8355 92.3608 29.9188 89.3248 29.9188C85.1828 29.9188 81.7808 27.5937 81.7808 23.3407ZM96.0935 21.9379V20.8549C95.0282 20.376 93.6334 20.054 92.1159 20.054C89.449 20.054 87.809 21.0962 87.809 23.021V23.1016C87.809 24.746 89.2039 25.7079 91.2133 25.7079C94.1248 25.7079 96.0935 24.1457 96.0935 21.9379ZM17.6382 18.8909V18.8103C17.6382 15.6434 15.3009 12.8745 11.8545 12.8745C8.28644 12.8745 6.15305 15.5628 6.15305 18.7302V18.8103C6.15305 21.9777 8.4912 24.7466 11.937 24.7466C15.5073 24.7466 17.6382 22.0583 17.6382 18.8909Z"
                            fill="#DA002B"></path>

                    </svg>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{width: '100%'}}>
                            <li className="nav-item mt-2" style={{width: "12%"}}>
                                <Link to={"/button/kategory"} className="nav-link active btn btn mt-2" aria-current="page" href="#"><i
                                    className="bi bi-border-width"/> Katalog</Link>
                            </li>
                            <li className="nav-item" style={{width: '70%'}}>
                                <a className="nav-link col-12" href="#">

                                </a>
                            </li>
                            <div className={"col-4 d-flex mb-2"}>
                                <div className={"col-10 btn  btn text-dark  me-5 "}
                                     style={{height: '3vh', width: '20%' }}>
                                    <i className="btn btn-black bi bi-bar-chart-line align-iems-center justify-content-center"></i>
                                    <br/>
                                    Taqqoslash
                                </div>
                                <div className={"col-10  btn  btn text-dark  me-3"}
                                     style={{height: '3vh', width: '20%', marginLeft: '5px'}}>
                                    <i className="bi bi-heart  "></i> <br/>
                                    Sevimlilar
                                </div>
                                <div className={"col-10  btn  btn text-dark  me-4   "}
                                     style={{height: '3vh', width: '20%', marginLeft: '5px'}}>
                                    <i className="bi bi-cart "></i> <br/>
                                    Savatcha
                                </div>
                                <div className={"col btn  btn text-dark"} style={{height: '3vh', width: '20%',}}>
                                    <i className="bi bi-person"></i>
                                    <br/> Kirish
                                </div>
                            </div>

                            <li className="nav-item">
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}

