import React from 'react'
import NavBar from '../nav/NavBar'
import Footer from '../footer/Footer'

var navLinks = [
    {
        title: 'INICIO',
        href: '/',
    },
    {
        title: 'SERVICIOS',
        href: '/Servicios',
    },
    {
        title: 'REGISTRO',
        href: '/Registro',
    }
]

class BasePage extends React.Component{



    render(){
        return(
            <div>
                <NavBar navData={navLinks}></NavBar>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default BasePage;