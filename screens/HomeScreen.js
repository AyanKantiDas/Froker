import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const dummyProfiles = [
    { name: 'Profile 1', image: 'https://via.placeholder.com/50' },
    { name: 'Profile 2', image: 'https://via.placeholder.com/50' },
    { name: 'Profile 3', image: 'https://via.placeholder.com/50' },
    { name: 'Profile 4', image: 'https://via.placeholder.com/50' },
    { name: 'Profile 5', image: 'https://via.placeholder.com/50' },
    { name: 'Profile 6', image: 'https://via.placeholder.com/50' },
];
const dummyPosts = [
    { name: 'Post 1', image: 'https://via.placeholder.com/150' },
    { name: 'Post 2', image: 'https://via.placeholder.com/150' },
    { name: 'Post 3', image: 'https://via.placeholder.com/150' },
    { name: 'Post 4', image: 'https://via.placeholder.com/150' },
    { name: 'Post 5', image: 'https://via.placeholder.com/150' },
    { name: 'Post 6', image: 'https://via.placeholder.com/150' },
    { name: 'Post 7', image: 'https://via.placeholder.com/150' },
];
const dummySuggestions = [
    { name: 'Suggestion 1', image: 'https://via.placeholder.com/50' },
    { name: 'Suggestion 2', image: 'https://via.placeholder.com/50' },
    { name: 'Suggestion 3', image: 'https://via.placeholder.com/50' },
];

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Stories</Text>
                    <ScrollView horizontal>
                        {dummyProfiles.map((profile, index) => (
                            <View key={index} style={styles.item}>
                                <Image source={{ uri: profile.image }} style={styles.image} />
                                <Text>{profile.name} </Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Posts </Text>
                    {dummyPosts.map((post, index) => (
                        <View key={index} style={styles.item}>
                            <Image source={{ uri: post.image }} style={styles.postImage} />
                            <Text>{post.name} </Text>
                        </View>
                    ))}
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Suggestions </Text>

                    {dummySuggestions.map((suggestion, index) => (
                        <View key={index} style={styles.item}>
                            <Image source={{ uri: suggestion.image }} style={styles.image} />
                            <Text>{suggestion.name} </Text>
                        </View>
                    ))}

                </View>
            </ScrollView>
            <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate('Profile')}>
                <Icon name="person-circle-outline" size={50} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 1,
    },
    section: {
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    item: {
        padding: 20,
        backgroundColor: '#eee',
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 10,
        borderRadius: 25,
    },
    postImage: {
        width: 150,
        height: 150,
        marginBottom: 10,
        borderRadius: 10,
    },
    profileIcon: {
        position: 'absolute',
        bottom: 10, // Adjusted to be above the suggestions section
        right: 20,
    },
});
