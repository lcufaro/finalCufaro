import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ShopNavigator from './stacks/index'
import AuthNavigator from './stacks/auth'
import { useState, useEffect } from 'react';
import TabNavigator from './tab/TabNavigator'
import { auth } from '../../app/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default () => {
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogger] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                const uid = user.uid;
                setIsLogger(true)
            } else {
                console.log("No user logged");
                setIsLogger(false)
            }
        })
    }, [])

    return (
        < NavigationContainer >
            {isLogged ? <TabNavigator /> : <AuthNavigator />}
        </ NavigationContainer>
    )
};
