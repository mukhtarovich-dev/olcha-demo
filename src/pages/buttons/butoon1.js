import React from 'react';

function Butoon1() {
    return (<div>
        <div className={'col-3 mt-4'} style={{
            width: '1400px', height: '450px', marginLeft: '100px', backgroundColor: 'lightgrey', borderRadius: '20px'
        }}>
            <div className={'col d-flex'} style={{
                height: '100%',
                backgroundImage: 'url("https://olcha.uz/_nuxt/header-img.a74f4693.png")',
                backgroundRepeat: 'no-repeat',
                marginLeft: '1000px'
            }}>
            </div>
            <div>
                <h1 style={{marginTop: '-350px', marginLeft: '50px', fontSize: '60px'}}>
                    Tovarlaringizni Olcha da <br/>soting
                </h1>
                <h4 style={{marginLeft: '50px'}}>
                    Olcha do'koniga mahsulotlaringizni ro'yxatga kiriting va savdolaringizni oshiring
                </h4>
                <button className={'btn btn-success'} style={{marginLeft: '50px'}}>Hamkorga aylaning</button>
            </div>

        </div>

        <div>
            <h1 style={{marginTop: '110px', marginLeft: '593px'}}>
                Bizning Avzal taraflarimiz
            </h1>
            <div className={"d-flex"}>
                <div style={{
                    backgroundColor: 'lightgray',
                    height: '200px',
                    width: '500px',
                    marginLeft: '100px',
                    borderRadius: '30px',
                    marginTop: '80px'
                }}>
                    <h1 style={{fontSize: '70px', marginTop: '20px', marginLeft: '30px'}}>
                        400 000
                    </h1>
                    <h3 className={"mt-4 "} style={{marginLeft: '30px'}}>
                        Oylik doimiy tashrif buyuruvchilar

                    </h3>
                </div>
                <div style={{
                    backgroundColor: 'lightgray',
                    height: '200px',
                    width: '500px',
                    marginLeft: '100px',
                    borderRadius: '30px',
                    marginTop: '80px'
                }}>
                    <h1 style={{fontSize: '70px', marginTop: '20px', marginLeft: '30px'}}>
                        > 300
                    </h1>
                    <h3 className={"mt-4 "} style={{marginLeft: '30px'}}>
                        Kunlik buyurtmalar

                    </h3>
                </div>
                <div style={{
                    backgroundColor: 'lightgray',
                    height: '200px',
                    width: '500px',
                    marginLeft: '100px',
                    borderRadius: '30px',
                    marginTop: '80px'
                }}>
                    <h1 style={{fontSize: '70px', marginTop: '20px', marginLeft: '30px'}}>
                        5 yil
                    </h1>
                    <h3 className={"mt-4 "} style={{marginLeft: '30px'}}>
                        O'zbekiston bozorida
                    </h3>
                </div>

            </div>
            <div style={{
                backgroundColor: 'lightgray',
                height: '200px',
                width: '700px',
                marginLeft: '100px',
                borderRadius: '30px',
                marginTop: '80px'
            }}>
                <h1 style={{fontSize: '70px', marginTop: '20px', marginLeft: '30px'}}>
                    > 100 000
                </h1>
                <h3 className={"mt-4 "} style={{marginLeft: '30px'}}>
                    Do'kondagi tovar turlari
                </h3>
            </div>
            <div className={'col d-flex'} style={{
                height: '100vh',
                marginTop: '-180px',
                width: '600px',
                backgroundImage: 'url("https://olcha.uz/_nuxt/comps.a0b508e1.png")',
                backgroundRepeat: 'no-repeat',
                marginLeft: '910px'
            }}>
            </div>
        </div>
    </div>);
}

export default Butoon1;