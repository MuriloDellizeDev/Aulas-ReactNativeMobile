import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import * as Location from 'expo-location';

const Localizacao = () => {
    const [localizacao, setLocalizacao] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão negada');
            }

            //Pega localização
            let location = await Location.getCurrentPositionAsync({});
            setLocalizacao(location);
        })();
    }, []);

    let text = '...';
    if (errorMsg)
        text = errorMsg;
    else if (localizacao) 
        text = JSON.stringify(localizacao);

    return (
        <View style={styles.container}>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({  
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }
  });

export default Localizacao;