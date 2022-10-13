import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import COLORS from "../const/colors";
import apibooks from "../service/apibooks";
import frontCover from "../assets/img/lor150.png"

const listImagem = () => {

    const [books, setBooks] = useState([]);

    useEffect(

        () => {

            apibooks.get('/listbooks').then((data) => {

                setBooks(data.data)

            })

        },
        []

    );

    return (

        <ScrollView>


            <View style={styleimg.container}>

                {
                    books.map(

                        books => (
                            <TouchableOpacity 
                            key={books.cod_books}
                            style={styleimg.post}
                            onPress={() =>{console.log('click')}}
                            >
                                <View>
                                    <Image style={styleimg.img} source={frontCover} />
                                    <Text style={styleimg.titlle}>{books.titlle}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    )
                }



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