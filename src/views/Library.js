import React, {useState,useEffect} from "react";
import {Image, ActivityIndicator, FlatList,StyleSheet, Text,View,TouchableHighlight} from 'react-native';
import UseBook from "../components/Book/useBook";


const styles =StyleSheet.create({

    image: {
        width: 400,
        height: 400,
        marginRight: 10,
    },
});

export default function Library({route}){
    const {bookId} =route.params;

    return(
        
        <View style={{paddingLeft: 10, fontSize: 5}}>

        <Text style={{paddingLeft: 10, color:'green'}}>{bookId.nombre}</Text>
        <Text> </Text>
        <Text style={{paddingLeft: 10, color:'blue'}}>Descripcion: {bookId.descripcion}</Text>
        <Text style={{paddingLeft: 10, color:'blue'}}>Marca: {bookId.marca}</Text>
        <Text style={{paddingLeft: 10, color:'blue'}}>Precio: Q {bookId.precio}</Text>
        <Text style={{paddingLeft: 10, color:'blue'}}>Existencias: {bookId.existencias}</Text>

        <Image source={{uri: bookId.url}} style={styles.image} />

   
        </View>
    )
    
}