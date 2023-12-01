import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import homeStyles from "../styles/homeStyles";

export default class PokemonDetails extends Component {
    render() {
        const { pokemon } = this.props.route.params;

        return (
          <View style={homeStyles.pokemonData}>
              <Image source={{ uri: pokemon.sprites.front_default }} style={homeStyles.image} />
              <Text style={homeStyles.name}>{pokemon.name}</Text>
              <Text>Height: {pokemon.height}</Text>
              <Text>Weight: {pokemon.weight}</Text>
              <Text>Type: {pokemon.types[0].type.name}</Text>
          </View>
        );
    }
}