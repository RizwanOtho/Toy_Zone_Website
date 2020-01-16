import React from 'react';
import Header from "./../../component/Header/Header";
import Navbar from "./../../component/Navbar/Navbar";
import Topbar from "./../../component/Topbar/Topbar";
import { Grid } from '@material-ui/core';
import "./blog.css";
function App() {
  return (
    <div >
      <Header/>
      <Topbar/>
      <Navbar/>
      <br />
       <div className="home">
      <span style={{textAlign:"left", alignItems:"left"}}>HOME/TOY ZONE CARE</span>
      </div>
      <br />
     
      <Grid container>
        <Grid lg={8}>
         <div>
           <h1 style={{textAlign:"left",marginLeft:"10%"}}>ToyZone Care</h1>
         </div>
         </Grid>
         <Grid lg={4}>

         <div>
          <h2 style={{color:"gray"}}> Resent Post</h2>
         </div> 
         </Grid>
      </Grid> 
    </div>
  );
}

export default App;
