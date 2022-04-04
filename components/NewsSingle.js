import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import NewsScreen from "../screens/NewsScreen";
import {Box} from "native-base";
import ArticleScreen from "../screens/ArticleScreen";

const baseUrl = 'https://cashkeep.info';

export default class NewsSingle extends React.Component {

    state = {
        isLoaded: false,
        articlesList: [],
        data: null,
        alias: '1'
    };

    async componentDidMount() {
        const id = this.props.route.params.id;
        const url = `${baseUrl}/api/news/`+id;
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
            console.log(data);
            this.setState({
                articlesList: data,
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

        return (<ArticleScreen list={this.state.articlesList} alias={this.state.alias} url={baseUrl}/>);
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
