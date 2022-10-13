import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListBooks from "./src/views/list";
import Cadastro from "./src/views/cadastro";
import Details from "./src/views/details";

const Stack = createNativeStackNavigator();


const App = () => {



  return (
    // <ListBooks/>
    <Details/>
//  <NavigationContainer>
//   <Stack.Navigator screenOptions={false}>
  
//     <Stack.Screen
//      name="Cadastro"
//      component={Cadastro}
//      options={{title:"CADASTRO DE LIVROS"}}
//     />

// <Stack.Screen
//      name="ListBooks"
//      component={Cadastro}
//      options={{title:"ListBooks DE LIVROS"}}
//     />

//   </Stack.Navigator>
//  </NavigationContainer>
  );

}


export default App;