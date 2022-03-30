import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import NewsScreen from "../screens/NewsScreen";
import {Box} from "native-base";

const baseUrl = 'https://cashkeep.info';

export default class News extends React.Component {

    state = {
        isLoaded: false,
        imagesList: [],
        data: null,
        alias: '1'
    };

    async componentDidMount() {
        const url = `${baseUrl}/api/news`;
        try {
            const response = await fetch(
                url,
                {
                    method: 'GET',
                    redirect: 'follow',
                    headers: {
                        'Accept': 'application/json',
                    },
                    responseType:'json',
                }
            );
            const data = await response.json();
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
                <Box flex={1} bg="brand.900" alignItems="center" justifyContent="center">
                    <ActivityIndicator size="small" style={styles.loader} />
                </Box>
            );
        }

        return (<NewsScreen list={this.state.imagesList} alias={this.state.alias} url={baseUrl}/>);
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
