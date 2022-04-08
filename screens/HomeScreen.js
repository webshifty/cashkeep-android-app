import React from 'react';
import { useState } from "react";
import { Dimensions } from "react-native";
import {Text, Box, Input, Button} from 'native-base';
import { PieChart } from "react-native-chart-kit";

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const HomeScreen = (props) => {
    const [data,setState] = useState([
        {
            name: "$ на BTC",
            population: 40,
            color: "#014CE6",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "$ на ETH",
            population: 20,
            color: "#9B9EB2",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "$ на SOL",
            population: 15,
            color: "#BBBDCC",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "$ на CAKE",
            population: 15,
            color: "#D8DBE5",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "$ на другие альты",
            population: 10,
            color: "#EBECF2",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
    ])

    const handleChange = () => {
        const {name, type, text} = event;
        let processedData = text;
        let btc = 0;
        let eth = 0;
        let sol = 0;
        let cake = 0;
        let shitcoins = 0;

        if (processedData > 0 && processedData <= 20){
            btc = processedData;
            setState([
                {
                    name: "$ на BTC",
                    population: btc,
                    color: "#014CE6",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
            ])
        } else if (processedData >= 20 && processedData <= 50){
            btc = processedData / 2;
            eth = processedData / 2;
            btc = Math.round((btc + Number.EPSILON) * 100) / 100;
            eth = Math.round((eth + Number.EPSILON) * 100) / 100;
            setState([
                {
                    name: "$ на BTC",
                    population: btc,
                    color: "#014CE6",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
                {
                    name: "$ на ETH",
                    population: eth,
                    color: "#9B9EB2",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                }
            ])
        } else if (processedData >= 50 && processedData <= 100){
            btc = processedData / 2;
            eth = processedData / 3;
            sol = processedData / 5;
            btc = Math.round((btc + Number.EPSILON) * 100) / 100;
            eth = Math.round((eth + Number.EPSILON) * 100) / 100;
            sol = Math.round((sol + Number.EPSILON) * 100) / 100;
            setState([
                {
                    name: "$ на BTC",
                    population: btc,
                    color: "#014CE6",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
                {
                    name: "$ на ETH",
                    population: eth,
                    color: "#9B9EB2",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
                {
                    name: "$ на SOL",
                    population: sol,
                    color: "#BBBDCC",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
            ])
        } else if (processedData > 100) {
            btc = processedData / 2.5;
            eth = processedData / 5;
            sol = processedData / 6.7;
            cake = processedData / 6.7;
            shitcoins = processedData / 10;
            btc = Math.round((btc + Number.EPSILON) * 100) / 100;
            eth = Math.round((eth + Number.EPSILON) * 100) / 100;
            sol = Math.round((sol + Number.EPSILON) * 100) / 100;
            cake = Math.round((cake + Number.EPSILON) * 100) / 100;
            shitcoins = Math.round((shitcoins + Number.EPSILON) * 100) / 100;
            setState([
                {
                    name: "$ на BTC",
                    population: btc,
                    color: "#014CE6",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
                {
                    name: "$ на ETH",
                    population: eth,
                    color: "#9B9EB2",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
                {
                    name: "$ на SOL",
                    population: sol,
                    color: "#BBBDCC",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
                {
                    name: "$ на CAKE",
                    population: cake,
                    color: "#D8DBE5",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
                {
                    name: "$ на другие альты",
                    population: shitcoins,
                    color: "#EBECF2",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
            ])
        }
    };

    return (
        <Box flex={1} bg="brand.900" alignItems="center" justifyContent="center">
            <Text color="brand.50">Какую сумму вы хотите инвестировать?</Text>
            <Input
                colorScheme="blue"
                borderColor="brand.200"
                mx="3"
                placeholder="000$"
                w="50%"
                maxWidth="300px"
                name="cash_amount"
                type="number"
                onChange={handleChange}
                variant="rounded"
                placeholderTextColor='white'
                color="#ffffff"
            />
            <PieChart
                data={data}
                width={Dimensions.get("window").width}
                height={250}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[0, 10]}
                absolute
            >
            </PieChart>
        </Box>
    );
}

export default HomeScreen;