import { NavigationContainer } from '@react-navigation/native';
import {Box, extendTheme, NativeBaseProvider} from 'native-base';
import BottomNavigationScreen from "./screens/BottomNavigationScreen";
import StackNavigationScreen from "./screens/StackNavigationScreen";


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

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <Box flex={1} h="100%" w="100%" maxWidth="100%" >
                <NavigationContainer>
                    <BottomNavigationScreen/>
                </NavigationContainer>
            </Box>
        </NativeBaseProvider>
    );
}
