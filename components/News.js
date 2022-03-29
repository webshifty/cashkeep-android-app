import React from 'react';
import axios from 'axios';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Text from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedText";
import NewsScreen from "../screens/NewsScreen";

const baseUrl = 'https://cashkeep.info';

export default class News extends React.Component {

    state = {
        isLoaded: false,
        imagesList: [],
        data: null,
        alias: '1'
    };
/*
    async getData() {
        const url = `${baseUrl}/api/news/`;
        const res = await axios.get(url);
        return await res.json();
    }
*/
    async componentDidMount() {
        const url = `${baseUrl}/api/news/`;
        try {
            const response = await fetch(
                url,
                {
                    method: 'GET',
                    redirect: 'follow',
                    headers: {
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Headers': 'Origin, Content-Type'
                    },
                    responseType:'json',
                    mode:'cors'
                }
            );

            const data = await response.json();
            console.log('data', data);
            //const data = await response.response;

            this.setState({
                imagesList: data,
                isLoaded: true,
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {

        if (!this.state.isLoaded) {
            return (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="small" style={styles.loader} />
                </View>
            );
        }

        if (this.state.imagesList.count > 0) {
            return (<NewsScreen list={this.state.imagesList} alias={this.state.alias}/>);
        }
        return (
        <Text>!!!</Text>
        );
    }
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    loaderContainer: {
        flex: 1
    }
});
