import React from 'react'
import { Link } from 'react-router'

class Footer extends React.Component{

    render(){
        return(
            <footer>
                <div className="container">
                    <div className="footerEncabezado">
                        <div className="footerSecciones">

                        </div>
                        <div className="footerSecciones">
                            <h5>Menu</h5>
                            <div className="divider" style={{backgroundColor:'#333'}}></div>
                            <ul>
                                <li>
                                    <Link to={"/"}>
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/Servicios"}>
                                        Servicios
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/Registro"}>
                                        Registro
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footerSecciones">
                            <h5>Contacto</h5>
                            <div className="divider" style={{backgroundColor:'#333'}}></div>
                            <ul>
                                <li>cel (+11)23567845</li>
                                <li>cel (+11)52637485</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider" style={{backgroundColor:'#333'}}></div>
                    <div className="footerBarra">
                        <div className="terminosContenedor">
                            <div className="terminos">
                                <a href="#/">Privacy</a>
                                <a href="#/">Terms</a>
                            </div>
                        </div>
                        <div className="center-align" style={{width:'100%'}}>
                            <p>© banighton 2016</p>
                        </div>
                        <div className="footerSocialsContenedor">
                            <div className="footerSocials">
                                <a href="#/">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="#/">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="#/">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;