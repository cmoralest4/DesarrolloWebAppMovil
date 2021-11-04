import React from "react";
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

//const GET_BOOK = 'GET_BOOK';

export default function UseBook({book, onPress}){
    return (
        <TouchableOpacity onPress={onPress} >

            <View>
                <Text>{book.nombre}</Text>
             </View>
        </TouchableOpacity>

    );
}