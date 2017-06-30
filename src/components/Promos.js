import React from 'react'

class Promos extends React.Component{
    render(){
        return(
            <div className="col s12 m6 l4">
                <div className="center promo" id={this.props.index}>
                    <i className="material-icons" style={{color:'#00aeef'}}>{this.props.icono}</i>
                    <span>{this.props.titulo}</span>
                    <p>{this.props.texto}</p>
                </div>
            </div>
        );
    }
}

export default Promos;