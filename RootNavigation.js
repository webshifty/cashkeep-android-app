import * as React from 'react';
import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native';
import CommonData from "./components/CommonData";
import BottomNavigationScreen from "./screens/BottomNavigationScreen";

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        // Perform navigation if the react navigation is ready to handle actions
        navigationRef.navigate(name, params);
    } else {
        // You can decide what to do if react navigation is not ready
        // You can ignore this, or add these actions to a queue you can call later
    }
}
