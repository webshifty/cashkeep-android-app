import { NavigationContainer } from '@react-navigation/native';
import {Box, extendTheme, NativeBaseProvider} from 'native-base';
import CommonData from "./components/CommonData";
import { navigationRef } from './RootNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import ArticleScreen from "./screens/ArticleScreen";
import News from "./components/News";
import BriefcaseScreen from "./screens/BriefcaseScreen";
import BottomNavigationScreen from "./screens/BottomNavigationScreen";

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
                <CommonData />
            </Box>
        </NativeBaseProvider>
    );
}
