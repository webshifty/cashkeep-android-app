import React from "react";
import 'react-native-gesture-handler';
import { Box, extendTheme, NativeBaseProvider, Button, Image } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommonData from "./components/CommonData";
import NewsSingle from "./components/NewsSingle";

const newColorTheme = {
    brand: {
        0: '#ffffff',
        50: '#D8D9E4',
        100: '#565966',
        200: '#0082F4',
        300: '#ffffff',
        400: '#ffffff',
        500: '#ffffff',
        600: '#ffffff',
        700: '#ffffff',
        800: '#21222B',
        900: '#191B1F',
    },
};
const theme = extendTheme({ colors: newColorTheme });
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <Box flex={1} h="100%" w="100%" maxWidth="100%" >
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                            name="Home"
                            component={CommonData}
                        />
                        <Stack.Screen
                            name="Article"
                            component={NewsSingle}
                            options={{
                                headerTitle: '',
                                headerShown: true
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Box>
        </NativeBaseProvider>
    );
}
