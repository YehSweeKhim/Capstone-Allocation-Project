import React from "react";
import "./App.css";
import Maps from "./Map";
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import sutdLogo from "../image_file/sutdLogo.png";


const AppWrapper = styled.div`
    justify-content: center;
    margin: 2em

`;


export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            checked: false,
        }
    }

    handleSubmit = (evt) => {
        fetch('http://localhost:3535/allocate', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: "nothing here",
        }).catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                {/* Navigation Bar */}
                <section id="nav-bar">

                    <nav class="navbar navbar-expand-lg navbar-light">
                    <button 
                        class="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <img src={sutdLogo} alt="SUTD Logo"></img>
                        <ul class="navbar-nav ml-auto">
                        <Link to="/form"> <li class="nav-item"> <a class="nav-link">FORM</a> </li> </Link>
                        <Link to="/studentMap"> <li class="nav-item"> <a class="nav-link" href="#contact">MAP ALLOCATION</a> </li> </Link>
                        <Link to="/changePassword"> <li class="nav-item"> <a class="nav-link" href="#contact">PASSWORD SETTING</a> </li> </Link>
                        <Link to="/"> <li class="nav-item"> <a class="nav-link" href="#contact">LOGOUT</a> </li> </Link>
                        </ul>
                    </div>

                    </nav>
                </section><br></br>

                {/* Header */}
                <h2 class="title">SUTD Capstone Campus Map</h2>

                <AppWrapper>
                    <Maps />
                </AppWrapper>
            </div>
        );
    }
}




