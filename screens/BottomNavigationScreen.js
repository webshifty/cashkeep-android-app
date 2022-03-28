import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./HomeScreen";
import NewsScreen from "./NewsScreen";
import News from "../components/News";
import BriefcaseScreen from "./BriefcaseScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function BottomNavigationScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Главная"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Главная',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Новости"
                component={News}
                options={{
                    tabBarLabel: 'Новости',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="newspaper" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name="Портфель"
                component={BriefcaseScreen}
                options={{
                    tabBarLabel: 'Портфель',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="briefcase" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomNavigationScreen;