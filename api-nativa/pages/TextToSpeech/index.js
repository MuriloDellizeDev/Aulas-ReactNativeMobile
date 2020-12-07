import React from "react";
import {View, StyleSheet, Button, StatusBar} from "react-native";
import * as Speech from 'expo-speech';

const TextToSpeech = () => {
    
    const speak = () => {
        Speech.speak("alo alo alo");
    }

    return (
        <View style={styles.container}>
            <Button title="Pressione para falar" onPress={() => speak()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
});

export default TextToSpeech;