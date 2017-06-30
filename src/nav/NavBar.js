import React from 'react';
import NavItem from './NavItem';
import { Link } from 'react-router';

class NavBar extends React.Component{

    onClick(){
        $('.hamburger').toggleClass('is-active');
        $('.menu').toggleClass('menuCerrar');
    }

    render(){

        var createLinkItem = function(item, index){
            return <NavItem
                key={item.title + index}
                href={item.href}
                title={item.title}
                selected={index}
            />;
        };

        return(
            <header>
                <div className="navegador">
                    <div className="logo"></div>
                    <a 
                        href="https://pablohernanaraujo.github.io/bnoClienteDashboard/#/"
                        target="_blank"
                        className="clientesBtn waves-effect waves-light btn-flat dashboard" style={{color: 'white', border: '2px solid white', lineHeight:'33px'}}>dashboard</a>
                    <div className="menuBtn">
                        <div className="hamburger hamburger--elastic" onClick={this.onClick.bind(this)}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <div>
                        <ul>
                            {this.props.navData.map(createLinkItem)}
                        </ul>
                        <div className="socials">
                            <a className="btn-floating btn-large waves-effect waves-light indigo lighten-1">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a className="btn-floating btn-large waves-effect waves-light blue">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a className="btn-floating btn-large waves-effect waves-light purple lighten-1">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default NavBar;