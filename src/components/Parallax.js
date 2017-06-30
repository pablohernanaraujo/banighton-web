import React from 'react'

class Parallax extends React.Component{
    render(){
        return(
            <div className="parallax-container" style={{margin: 0,display: 'block'}}>
                <div className="container parallaxContenido">
                    <h3>{this.props.titulo}</h3>
                    <p>{this.props.texto}</p>
                    <div className="divider"></div>
                    <div className="parallaxSocials">
                        <a className="btn-floating btn waves-effect waves-light blue">
                            <i className={'fa fa-'+this.props.icono1} aria-hidden="true"></i>
                        </a>
                        <a className="btn-floating btn waves-effect waves-ligh blue">
                            <i className={'fa fa-'+this.props.icono2} aria-hidden="true"></i>
                        </a>
                        <a className="btn-floating btn waves-effect waves-light blue">
                            <i className={'fa fa-'+this.props.icono3} aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="parallax">
                    <img src={'./app/images/'+this.props.imagen+'.jpg'} />
                </div>
            </div>
        );
    }
}

export default Parallax;