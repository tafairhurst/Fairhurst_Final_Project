import React, { Component } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';

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

            <View style={styles.container}>
                <View>
                    <Text>Welcome to the Home Page!</Text>
                    <Button title="Go to List" onPress={() => this.props.navigation.navigate('Pokemon List')} />
                </View>
                <Text style={styles.title}>PokéApp</Text>

                {/* Text input for entering Pokémon name */}
                <TextInput
                    style={styles.input}
                    value={pokemonName}
                    onChangeText={this.handleInputChange}
                    placeholder="Enter Pokémon name"
                />

                {/* Button to trigger fetching the Pokémon data */}
                <Button title="Get Pokémon" onPress={this.fetchPokemonData} />

                {/* Display error message if there's any */}
                {error && <Text style={styles.error}>{error}</Text>}

                {/* Display Pokémon data if available */}
                {pokemonData && (
                    <View style={styles.pokemonData}>
                        <Image source={{ uri: pokemonData.sprites.front_default }} style={styles.image} />
                        <Text style={styles.name}>{pokemonData.name}</Text>
                        <Text>Height: {pokemonData.height}</Text>
                        <Text>Weight: {pokemonData.weight}</Text>
                        <Text>Type: {pokemonData.types[0].type.name}</Text>
                    </View>
                )}
            </View>
        );
    }
}

// Styling for the components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        width: '80%',
        marginBottom: 20,
    },
    error: {
        color: 'red',
        marginBottom: 20,
    },
    pokemonData: {
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    name: {
        fontSize: 20,
        marginBottom: 10,
    }
});

export default HomeScreen;