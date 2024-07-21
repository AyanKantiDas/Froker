import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const dummyPosts = [
    { name: 'Post 1', image: 'https://via.placeholder.com/100' },
    { name: 'Post 2', image: 'https://via.placeholder.com/100' },
    { name: 'Post 3', image: 'https://via.placeholder.com/100' },
];

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileSection}>
                <View style={styles.profileInfo}>
                    <Text>Followers: 100 </Text>
                    <Text>Following: 50 </Text>
                    <Text>Posts: 3 </Text>
                </View>
                <Image
                    source={{ uri: 'https://via.placeholder.com/100' }}
                    style={styles.profilePicture}
                />
            </View>
            <View style={styles.postsSection}>
                <ScrollView horizontal>
                    {dummyPosts.map((post, index) => (
                        <View key={index} style={styles.post}>
                            <Image source={{ uri: post.image }} style={styles.postImage} />
                            <Text>{post.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    profileSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileInfo: {
        flex: 1,
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    postsSection: {
        alignItems: 'center',
    },
    post: {
        padding: 10,
        backgroundColor: '#eee',
        marginRight: 10,
        alignItems: 'center',
    },
    postImage: {
        width: 100,
        height: 100,
        marginBottom: 5,
    },
});
