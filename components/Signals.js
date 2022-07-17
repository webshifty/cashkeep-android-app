import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import SignalsScreen from "../screens/SignalsScreen";
import {Box} from "native-base";

const baseUrl = 'https://cashkeep.info';

export default class News extends React.Component {

    state = {
        isLoaded: false,
        signalsList: [],
        data: null,
        alias: '1'
    };

    async componentDidMount() {
        const url = `${baseUrl}/api/signals`;
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
                signalsList: data,
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

        return (<SignalsScreen list={this.state.signalsList} alias={this.state.alias} url={baseUrl}/>);
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
