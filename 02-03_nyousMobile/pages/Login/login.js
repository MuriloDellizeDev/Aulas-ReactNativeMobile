import React, {useState} from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const salvarToken = async (value) => {
        try {
          await AsyncStorage.setItem('@jwt', value)
        } 
        catch (error) {
            console.log(error);
        }
      }

    const Entrar = () => {


        fetch("http://192.168.15.3:5000/api/account/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                senha: senha
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.status!==404) {
                alert("Login Efetuado")
                salvarToken(data.token)
                navigation.push("Autenticado")

            }
            else 
                alert("Email ou senha inválidos!");
        })
        .catch(err => console.log(err));

    }

    return (
        <View style={styles.container}>

    <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://drive.google.com/thumbnail?id=1lFfMpoUQL9Y_P24kj1PquasA8znCMRaw&authuser=1&sz=w1349-h568',
        }}
      />
           
            
            <Text style={styles.loginText}>Login</Text>

            <TextInput 
                style={styles.input} 
                value={email} 
                onChangeText={text=>setEmail(text)} 
                placeholder="Digite seu email..."
            />

            <TextInput 
                style={styles.input} 
                value={senha} 
                onChangeText={text=>setSenha(text)} 
                secureTextEntry={true}
                placeholder="Digite sua senha..."
           /> 
            
            <TouchableOpacity
                style={styles.button}
                onPress={Entrar}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text 
                style={styles.linkText}
                onPress={() => Linking.openURL('http://google.com')}>
                Esqueceu sua senha 
            </Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container: { 
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',


    },
    input : {

        borderColor: "#DEDEDE",
        borderWidth: 1,
        borderRadius: 6,
        width: "90%",
        height: 40,
        marginTop: 10,
        padding: 10
       
    },
    button : {

        backgroundColor : '#0069D9',
        padding: 10,
        borderRadius: 6,
        width: "90%",
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',


    },
    buttonText : {

        color: 'white'

    },
    loginText : {

        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,

    },
    tinyLogo: {
        width: '50%',
        height: 100,
    },
    linkText : {

        color: 'blue',
        marginTop: 10

    } 
  });

export default Login;