import React, {useState,useEffect} from "react";
import {TextInput, FlatList,StyleSheet, Text,View,TouchableHighlight} from 'react-native';
import BookListItem from "../components/Book/BookListItem";
import filter from 'lodash.filter';


export default function Home({navigation}){

const [books, setBooks]=useState(null);

// nuevas state variables
const [data, setData] = useState([]);
const [query, setQuery] = useState('');
const [fullData, setFullData] = useState([]);

function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Buscar"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }

  // nueva funcion

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(books, user => {
      return contains(user, formattedQuery);
    });
    setBooks(filteredData);
    setQuery(text);
  };
  
  const contains = (user, query) => {
  
    if (user.nombre.includes(query)) {
      return true;
    }
  
    return false;
  };

  // acaba

  function handleOnPress({bookId}){
      navigation.navigate('Library',{bookId});
  }

  useEffect(function(){
    async function fetchData(){
        const response = await fetch('http://192.168.0.9/apiframeworks/');
        const json = await response.json()
        setBooks(json)

        // nuevo
        setFullData(json);
      }
    
      fetchData();

  }, [] );

    return(
        <View style={{paddingLeft: 10, fontSize: 5}}>
            <Text style={{paddingLeft: 10, color:'#101010', fontSize: 20, fontWeight: '700', textAlign: 'center'}}>Lista de Medicamentos</Text>
            <FlatList 
                data={books}
                renderItem={({item}) => (
                <BookListItem book={item} onPress={() => handleOnPress({bookId: item})} />
                )}
                keyExtractor={item => item.id}
                ListHeaderComponent={renderHeader}
        />
        </View>
    )
    
}
