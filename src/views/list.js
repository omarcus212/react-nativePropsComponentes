import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import COLORS from "../const/colors";
import apibooks from "../service/apibooks";
import frontCover from "../assets/img/lor150.png"

const listImagem = () => {

    const [books, setBooks] = useState([]);

    useEffect(

        () => {

            apibooks.get('/listbooks').then((data) => {

                console.log(data);

            })

        },
        []

    );

    return (

        <ScrollView>


            <View style={styleimg.container}>

                <View style={styleimg.post}>
                    <Image style={styleimg.img} source={frontCover} />
                    <Text style={styleimg.titlle}>herry potter is the best</Text>
                </View>

            </View>



        </ScrollView>
    );
}


const styleimg = StyleSheet.create({

    container: {
        alignItems: "center"
    },

    post: {
        width: '95%',
        alignItems: 'center',
        backgroundColor: '#cccc',
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 5
    },

    img: {
        borderRadius: 5,
        marginVertical: 15,
        marginLeft: 15

    },

    titlle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'

    }
});




export default listImagem;