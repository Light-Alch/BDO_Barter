import "./styles.css";
import coin from "./assets/icons/10.png";
import Storage from "./Storage";
import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";

export default function App() {
  return (
    <div className="App">
      <h1>BDO Barter</h1>
      <h2>To Do's:</h2>
      <p>
        Storage - currently in progress<br></br>
        Central Market<br></br>
        List of Nodes<br></br>
        Lifeskills<br></br>
        Settings<br></br>
      </p>

      <img src={coin} alt="Crow Coin" />
    </div>
  );
}

/*  <div class="sidenav">
 <ul>
  <li>  
    <a href="#"> Storage </a>  
  </li> 
  <li>  
    <a href="#"> Central Market </a>  
  </li> 
  <li>  
    <a href="#"> Nodes </a>  
  </li> 
  <li>  
    <a href="#"> Lifeskills </a>  
  </li> 
  <li>  
    <a href="#"> Settings </a>  
  </li> 
 </ul>
</div>  */
