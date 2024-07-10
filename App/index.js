// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
    const [letterIndex, setLetterIndex] = useState(0);
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const nextLetter = () => {
        setLetterIndex((prevIndex) => (prevIndex + 1) % letters.length);
    };

    const previousLetter = () => {
        setLetterIndex((prevIndex) => (prevIndex - 1 + letters.length) % letters.length);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.letterContainer}>
                <Text style={styles.letter}>{letters[letterIndex]}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Previous" onPress={previousLetter} />
                <Button title="Next" onPress={nextLetter} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20, // avoid overlap with status bar
    },
    letterContainer: {
        marginBottom: 20,
    },
    letter: {
        fontSize: 120,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
});

export default App;