import React from 'react';
import { Dimensions } from "react-native";
import { Text, Box, Input } from 'native-base';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

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
    let btc_amount = 0;
    let eth_amount = 0;
    let altcoins_amount = 0;

    const data = [
        {
            name: "BTC",
            population: btc_amount,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "ETH",
            population: eth_amount,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Altcoins",
            population: altcoins_amount,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
    ]

    const handleChange = () => {
        const {name, type, text} = event;
        let processedData = text;
        if(type==='text') {
            processedData = value.toUpperCase();
        } else if (type==='number') {
            processedData = value * 2;
        }
        console.log(processedData);
        let btc = processedData / 2;
        let eth = processedData / 2.5;
        let altcoins = processedData / 10;
        console.log(btc);
        data.push(
            {
                name: "BTC",
                population: btc,
                color: "rgba(131, 167, 234, 1)",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
        );
    }


    return (
        <Box flex={1} bg="brand.900" alignItems="center" justifyContent="center">
            <Text color="brand.50">Какую сумму вы хотите инвестировать?</Text>
            <Input
                mx="3"
                placeholder="000$"
                w="75%"
                maxWidth="300px"
                name="cash_amount"
                type="number"
                onChange={handleChange}
                variant="rounded"
            />
            <PieChart
                data={data}
                width={Dimensions.get("window").width}
                height={250}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[10, 50]}
                absolute
            >
            </PieChart>
        </Box>
    );
}

export default HomeScreen;