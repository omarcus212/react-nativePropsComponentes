import React from "react";
import { StyleSheet } from "react-native";
import Login from "./src/views/login";
import Home from "./src/views/home";
import ListImagem from "./src/views/list";
import Cadastro from "./src/views/cadastro";


const App = () => {
  //const name = 'Senai';


  return (
 
    // <Cadastro />
    <ListImagem/>


  );

}


const stylea = StyleSheet.create({

  container: {
  },

  tittle: {
    width: "100%",
    backgroundColor: "#F00",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "#FFF",
    fontWeight: "bold",
    padding: 10,
  },

});

export default App;