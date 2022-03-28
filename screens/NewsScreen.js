import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Button } from 'react-native';

/*
function NewsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>News!</Text>
        </View>
    );
}
*/
const NewsScreen = (props) => {
    console.log(props.list);
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {props.list.data.map((item) => {
                    const collection = url + item.id;

                    return (

                            <View
                                key={item.image + item.title}
                                onPress={() => navigate('SingleArticle', {collection, title: item.title})}
                            >
                                <Image
                                    style={{width: '100%', height: 300}}
                                    source={{uri: item.image}}/>
                                <Text style={styles.cardText}>{item.title}</Text>
                                <Button
                                    buttonStyle={styles.button}
                                    titleStyle={styles.buttonText}
                                    onPress={() => navigate('Article', {collection, title: item.title, alias})}
                                    title='ОТКРЫТЬ'/>
                            </View>

                    );
                })}
        </View>
    );
}

export default NewsScreen;