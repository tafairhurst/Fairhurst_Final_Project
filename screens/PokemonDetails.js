import React, { Component } from 'react';
import { View, Text} from 'react-native';
import HomeScreen from "./HomeScreen";

export default class PokemonDetails extends Component {
    render() {
        const { pokemon } = this.props.route.params;

        return (
          <View>
              <Text>{pokemon.name}</Text>
          </View>
        );
    }
}