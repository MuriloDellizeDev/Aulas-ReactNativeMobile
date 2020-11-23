import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const logar = ()  => {

    alert(`${email} ${senha}`)

  }
  
  return (

    


    <View style={styles.container}>

    <Text>Login</Text>

    <Text>Email</Text>
    <TextInput

          style={{ height: 40, width: 200, borderColor: 'black', borderWidth: 1 }}

          //React - OnChange={event =>  setEmail(event.target.value)}
          onChangeText={text => setEmail(text)}
          value={email}

        />

    <Text>Senha</Text>
        <TextInput

              style={{ height: 40, width: 200, borderColor: 'black', borderWidth: 1, marginTop: 15 }}

              //React - OnChange={event =>  setEmail(event.target.value)}
              onChangeText={text => setSenha(text)}
              value={senha}

            />

      <Button
        onPress={logar}
        title="Logar"
        color="#841584"
        accessibilityLabel="Login"
      />       

  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#475966',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

