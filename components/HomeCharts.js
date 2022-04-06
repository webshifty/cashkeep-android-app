import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {Box} from "native-base";
import HomeScreen from "../screens/HomeScreen";

export default class HomeCharts extends React.Component {

    state = {
        isLoaded: false,
        chartData: [],
        data: null,
        alias: '1'
    };

    async componentDidMount() {

    }

    render() {

        if (!this.state.isLoaded) {
            return (
                <Box flex={1} bg="brand.900" alignItems="center" justifyContent="center">
                    <ActivityIndicator size="small" style={styles.loader} />
                </Box>
            );
        }

        return (<HomeScreen data={this.state.articlesList} alias={this.state.alias} url={baseUrl}/>);
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
