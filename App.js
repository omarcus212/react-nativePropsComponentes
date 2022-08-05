import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Login from "./src/views/login";
import Home from "./src/views/home";
import Cadastro from "./src/views/cadastro";

const App = () => {
  const name = 'Senai';


  return (
    // <View>
    //   <Text style={stylea.tittle}>
    //     {name}
    //   </Text>
    // </View> 

    //  <Login/>
    <Cadastro />


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