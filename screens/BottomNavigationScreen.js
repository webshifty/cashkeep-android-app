import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./HomeScreen";
import News from "../components/News";
import Signals from "../components/Signals";
import BriefcaseScreen from "./BriefcaseScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomNavigationScreen = (props) => {
    let countArticles = props.list.count_today_articles;
    if (countArticles === 0) {
        countArticles = null;
    }

    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#0082F4',
                tabBarInactiveTintColor: '#D8D9E4',
                tabBarActiveBackgroundColor: '#191B1F',
                tabBarInactiveBackgroundColor: '#191B1F',
                headerShown: false
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
                    tabBarBadge: countArticles,
                    tabBarBadgeStyle: {
                        color:'#ffffff',
                        backgroundColor:'#ff414b'
                    }
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
            <Tab.Screen
                name="Сигналы"
                component={Signals}
                options={{
                    tabBarLabel: 'Сигналы',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chart-bar" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigationScreen;