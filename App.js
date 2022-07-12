import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigation from './src/navigation';
import QuicksandRegular from './assets/Quicksand-Regular.ttf';
import ShopProvider from './context/Shop';


const App = () => {
    const [loaded] = useFonts({ 'QuicksandRegular': QuicksandRegular });

    if (!loaded) return <AppLoading />

    return (
        <ShopProvider >
            <MainNavigation />
        </ShopProvider>
    );
}

export default App;