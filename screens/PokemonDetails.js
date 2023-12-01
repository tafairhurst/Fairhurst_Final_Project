import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import homeStyles from "../styles/homeStyles";

export default class PokemonDetails extends Component {
    render() {
        const {pokemon} = this.props.route.params;

        if (pokemon.types[1] != undefined) {
            return (
                <View style={homeStyles.pokemonData}>
                    <Image source={{uri: pokemon.sprites.front_default}} style={homeStyles.image}/>
                    <Image source={{uri: pokemon.sprites.front_shiny}} style={homeStyles.image}/>
                    <Text style={homeStyles.name}>{pokemon.name}</Text>
                    <Text>Height: {pokemon.height}</Text>
                    <Text>Weight: {pokemon.weight}</Text>
                    <Text>Types: {pokemon.types[0].type.name} and {pokemon.types[1].type.name}</Text>
                </View>
            );
        } else {
            return (
                <View style={homeStyles.pokemonData}>
                    <Image source={{uri: pokemon.sprites.front_default}} style={homeStyles.image}/>
                    <Image source={{uri: pokemon.sprites.front_shiny}} style={homeStyles.image}/>
                    <Text style={homeStyles.name}>{pokemon.name}</Text>
                    <Text>Height: {pokemon.height}</Text>
                    <Text>Weight: {pokemon.weight}</Text>
                    <Text>Type: {pokemon.types[0].type.name}</Text>
                </View>
            );
        }
    }
}