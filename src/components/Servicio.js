import React from 'react'
import { Link } from 'react-router'

class Servicio extends React.Component{
    render(){
    return(
        <div className="card hoverable">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={this.props.imagen}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{this.props.titulo}
                    <i className="material-icons right">more_vert</i>
                </span>
                <p>
                    <Link to={this.props.href}>
                        Ver detalle
                    </Link>
                </p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Push
                   <i className="material-icons right">close</i>
                </span>
                <p>{this.props.texto}</p>
            </div>
        </div>
    );
}
}

export default Servicio;