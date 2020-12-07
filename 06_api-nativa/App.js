import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contatos from './pages/Contacts';
import TextToSpeech from './pages/TextToSpeech';
import Localizacao from './pages/Location';
import ImagemCamera from './pages/ImagemCamera';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contacts" component={Contatos} />
        <Tab.Screen name="TextToSpeech" component={TextToSpeech} />
        <Tab.Screen name="Location" component={Localizacao} />
        <Tab.Screen name="Camera" component={ImagemCamera} />
      </Tab.Navigator>  
    </NavigationContainer>
  );
}