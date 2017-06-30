import React from 'react'
import ImagenFondo from '../components/ImagenFondo'

class ServiciosPage extends React.Component{
    constructor(){
        super();
        this.state = {
            seccion: 'servicios',
            front: 'servicios-front',
            alto: '720px',
            ancho: '1400px',
            izquierda: '5%',
            text1: 'Todo lo que',
            text2: 'necesitas para que',
            text3: 'la gente te conosca mas'
        }
    }

    render(){
        return(
            <div>
                <ImagenFondo
                    seccion={this.state.seccion}
                    front={this.state.front}
                    ancho={this.state.ancho}
                    alto={this.state.alto}
                    izquierda={this.state.izquierda}
                    text1={this.state.text1}
                    text2={this.state.text2}
                    text3={this.state.text3}
                />
                <div className="row push-titulo bg-blanco">
                    <div className="col s12 m7">
                        <img src="../app/images/pushNotification.png" alt=""/>
                    </div>
                    <div className="csl s12 m5">
                        <div className="section">
                            <h5>Push Notification</h5>
                            <p>La forma mas fácil y directa para llegar a tus usuarios.</p>
                        </div>
                    </div>
                    <div className="clear"></div>
                    <div className="container">
                        <ul className="collapsible popout" data-collapsible="accordion">
                            <li>
                                <div className="collapsible-header active"><i className="ion-android-locate"></i>Push Zonal</div>
                                <div className="collapsible-body">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <div className="btn-push">
                                        <a className="waves-effect waves-light btn bg-principal">Consultar costos</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="ion-qr-scanner"></i>Push Gold</div>
                                <div className="collapsible-body">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <div className="btn-push">
                                        <a className="waves-effect waves-light btn bg-principal">Consultar costos</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="ion-planet"></i>PushUniverse</div>
                                <div className="collapsible-body">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <div className="btn-push">
                                        <a className="waves-effect waves-light btn bg-principal">Consultar costos</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row push-titulo bg-terceario">
                    <div className="col s12 m7 ">
                        <img src="../app/images/mailingMarketing.png" alt=""/>
                    </div>
                    <div className="csl s12 m5">
                        <div className="section">
                            <h5>Mailing Marketing</h5>
                            <p>Informa mas rápido todas tus noticias y promociones.</p>
                        </div>
                    </div>
                    <div className="clear"></div>
                    <div className="container">
                        <ul className="collapsible popout" data-collapsible="accordion">
                            <li>
                                <div className="collapsible-header active bg-terceario"><i className="ion-paper-airplane"></i>Mailing Personalizados</div>
                                <div className="collapsible-body">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <div className="btn-push">
                                        <a className="waves-effect waves-light btn bg-principal">Consultar costos</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header bg-terceario"><i className="ion-email"></i>Mailing Promosionales</div>
                                <div className="collapsible-body">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <div className="btn-push">
                                        <a className="waves-effect waves-light btn bg-principal">Consultar costos</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiciosPage;