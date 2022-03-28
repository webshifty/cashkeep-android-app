import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigationScreen from "./screens/BottomNavigationScreen"

export default function App() {
    return (
        <NavigationContainer>
            <BottomNavigationScreen/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
