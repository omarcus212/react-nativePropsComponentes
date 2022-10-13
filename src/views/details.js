import React, { useEffect, useState } from "react";

import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import apibooks from "../service/apibooks";
import frontCover from "../assets/img/lor150.png"
import COLORS from "../const/colors";



const Details = () => {

    const cod_books = 2;

    const [book, setBooks] = useState({
        cod_books: "",
        titlle: "",
        description: "",
        image: ""
    });

    useEffect(
        () => {
            apibooks.get(`/listbooks/${cod_books}`)
                .then(
                    (book) => {
                        setBooks(book.data[0])
                    }
                )
                .catch();
        }
    );

    return (

        <ScrollView>
            <View style={StyleDetaile.container}>

                <View style={StyleDetaile.post}>
                    <Image style={StyleDetaile.img} source={frontCover} />
                    <Text style={StyleDetaile.titlle}>{book.titlle}</Text>
                    <Text style={StyleDetaile.Descript}>{book.description}</Text>
                </View>

                <View style={StyleDetaile.buttons}>
                    <TouchableOpacity
                        style={StyleDetaile.button}
                        onPress={() => { }}>

                        <Text style={StyleDetaile.texButton}>Editar</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={StyleDetaile.button}
                        onPress={() => { }}>

                        <Text style={StyleDetaile.texButton}>Excluir</Text>

                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>


    );


}


const StyleDetaile = StyleSheet.create({

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

    },
    Descript: {
        width: "100%",
        fontSize: 16,
        textAlign: "justify"
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: "center"
    },

    button: {
        width: "100%",
        marginHorizontal: 10,
        backgroundColor:COLORS.gray,
        
    },
    texButton: {
        padding: 10,
        textAlign: "center",
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: 16,
        color:COLORS.black
    }







});

export default Details;
