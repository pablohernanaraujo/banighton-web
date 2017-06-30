import React from 'react'
import ImagenFondo from '../components/ImagenFondo'
import LeadCapture from '../components/LeadCapture'

class RegistroPage extends React.Component{
    constructor(){
        super();
        this.state = {
            seccion: 'register',
            front: false,
            alto: '430px',
            ancho: '1000px',
            izquierda: '0%',
            text1: 'Registrate ya',
            text2: 'y comenza a ver',
            text3: 'como la gente te elige'
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
                <div className="row" style={{backgroundColor:'white', padding:'100px 0px'}}>
                    <div className="container">
                        <div className="col s12">
                            <div className="center-align">
                                <h2>Registrarse</h2>
                                <p className="center-align">Es super facil empesar en banighton</p>
                            </div>
                        </div>
                        <div className="col s12 m8 push-m2">
                            <LeadCapture />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default RegistroPage;