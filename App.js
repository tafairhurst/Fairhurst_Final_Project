import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PokemonList from "./screens/PokemonList";
import PokemonDetails from './screens/PokemonDetails';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Pokemon Search" component={HomeScreen} />
                <Stack.Screen name="Pokemon List" component={PokemonList} />
                <Stack.Screen name="Pokemon Details" component={PokemonDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}