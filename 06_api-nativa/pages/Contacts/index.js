import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, StatusBar, FlatList, Button} from 'react-native'
import * as Contacts from 'expo-contacts';


const styles = StyleSheet.create({

    container : {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: "gray",
        padding: 20,
        marginHorizontal: 16,
        marginVertical: 8
    }

})



const ItemContato = ({nome, id}) => {

    return(
        <View style={styles.item}>
            <Text>{nome}</Text>
            <Button onPress={() => alert(id)} title="Id Item"/>
        </View>
    )

}



const Contatos = () => {

    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails],
            });
    
            if (data.length > 0) {
              setContatos(data);
            }
          }
        })();
      }, []);
    
      
      const renderItem = ({item}) => {
        return (
            <ItemContato nome={item.name} id={item.id}/>
        )
    }  
      
    return(
        <View style={styles.container}>
            <Text>Contatos</Text>
            <FlatList
                data={contatos}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )

}

export default Contatos