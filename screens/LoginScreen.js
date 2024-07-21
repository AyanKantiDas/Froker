import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login / Sign Up </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Username"
                value={username}
                onChangeText={setUsername}
            />
            <Button
                title="Login"
                onPress={() => navigation.navigate('HomeTabs')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        borderRadius: 20,
    },
    buttonContainer: {
        width: '20%', // Adjust this value to increase or decrease button width
    },
});

export default LoginScreen;
