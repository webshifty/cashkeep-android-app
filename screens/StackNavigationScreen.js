import HomeScreen from "./HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigationScreen from "./BottomNavigationScreen";

const Stack = createNativeStackNavigator();

function StackNavigationScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown:false }}
            />
        </Stack.Navigator>
    );
}

export default StackNavigationScreen;