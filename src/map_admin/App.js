import React from "react";
import "./App.css";
import Maps from "./Map";
import {Link} from 'react-router-dom';
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
                <Link to="/map"> <li class="nav-item"> <a class="nav-link" href="#contact">MAP ALLOCATION</a> </li> </Link>
                <Link to="/adminAddAccount"> <li class="nav-item"> <a class="nav-link" href="#contact" id="addAdmin">ADD ADMIN ACCOUNT</a> </li> </Link>
                <Link to="/adminResetPassword"> <li class="nav-item"> <a class="nav-link" href="#contact" id="resetPw">PASSWORD SETTING</a> </li> </Link>
                <Link to="/adminLogin"> <li class="nav-item"> <a class="nav-link" href="#contact" id="btnLogout">LOGOUT</a> </li> </Link>
              </ul>
            </div>

          </nav>
        </section><br></br>

        {/* Title */}
        <h2 class="title">SUTD Capstone Campus Map</h2>

        {/* Map Allocation */}
        <AppWrapper>
          <form action="http://localhost/exportDatabase/exportDatabase.php" method="post">
            <div class="input_field">
              <label>Student's Form Application: </label>
                <button
                  type="button"
                  id="accessdb"
                  class="accessdb"
                  onClick={(e): void =>  {
                    e.preventDefault();
                    window.location.href='http://localhost:3535/registration';
                  }}
                > Access Database</button>
                
                <input 
                  type="submit" 
                  value="Export to Excel" 
                  class="btn" 
                  id="submitForm" 
                  onChange={this.handleChange}
                  onClick={this.handleEdit}
                />
            </div>
          </form>

          <form onSubmit={this.handleSubmit}>
            <div class="input_field">
              <label>Allocate Project Booths:</label>
              <button 
                type="submit" 
                id="runalgo" 
                class="runalgo"
              >Run Algorithm</button>
            </div>
          </form>

          <Maps/>
        </AppWrapper>
      </div>
    );
  }
}