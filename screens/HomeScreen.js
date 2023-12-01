import React, { Component } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';
import homeStyles from "../styles/homeStyles";

class HomeScreen extends Component {
    // Code adapted from https://github.com/kevinjfaucher/Pokemon/blob/main/app.js
    // State initialization
    state = {
        pokemonName: "",
        pokemonData: null,
        error: null,
    };

    // Handle the input change and update the state with the entered Pokémon name
    handleInputChange = (text) => {
        this.setState({ pokemonName: text.toLowerCase() });
    };

    // Fetch Pokémon data from the API
    fetchPokemonData = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`)
            .then(response => {
                // If the response is not okay (like a 404 not found), throw an error
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse the JSON data from the response
                return response.json();
            })
            .then(data => {
                // Set the parsed data to the state
                this.setState({ pokemonData: data });
            })
            .catch(error => {
                // If there's an error (either from fetch or from the above code), set an error state
                this.setState({ error: "Failed to fetch Pokémon data" });
            });
    };

    render() {
        const { pokemonName, pokemonData, error } = this.state;

        return (

            <View style={homeStyles.container}>
                <View>
                    <Text>Welcome to the Home Page!</Text>
                    <Button title="Go to List" onPress={() => this.props.navigation.navigate('Pokemon List')} />
                </View>
                <Text style={homeStyles.title}>PokéApp</Text>

                {/* Text input for entering Pokémon name */}
                <TextInput
                    style={homeStyles.input}
                    value={pokemonName}
                    onChangeText={this.handleInputChange}
                    placeholder="Enter Pokémon name"
                />

                {/* Button to trigger fetching the Pokémon data */}
                <Button title="Get Pokémon" onPress={this.fetchPokemonData} />

                {/* Display error message if there's any */}
                {error && <Text style={homeStyles.error}>{error}</Text>}

                {/* Display Pokémon data if available */}
                {pokemonData && (
                    <View style={homeStyles.pokemonData}>
                        <Image source={{ uri: pokemonData.sprites.front_default }} style={homeStyles.image} />
                        <Text style={homeStyles.name}>{pokemonData.name}</Text>
                        <Text>Height: {pokemonData.height}</Text>
                        <Text>Weight: {pokemonData.weight}</Text>
                        <Text>Type: {pokemonData.types[0].type.name}</Text>
                    </View>
                )}
            </View>
        );
    }
}
export default HomeScreen;