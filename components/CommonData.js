import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import NewsScreen from "../screens/NewsScreen";
import {Box} from "native-base";
import BottomNavigationScreen from "../screens/BottomNavigationScreen";

const baseUrl = 'https://cashkeep.info';

export default class CommonData extends React.Component {

    state = {
        isLoaded: false,
        articlesList: [],
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
                articlesList: data,
                isLoaded: true,
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (<BottomNavigationScreen list={this.state.articlesList}/>);
    };
}
