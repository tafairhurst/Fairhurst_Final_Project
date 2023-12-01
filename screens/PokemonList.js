import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import styles from '../styles/styles.js';

const pokePath = "https://pokeapi.co/api/v2/";
const pokeQuery = "pokemon?limit=151&offset=0";
const firstGenPokemonPath = `${pokePath}${pokeQuery}`;

//1 Call Pokemon IDs --> 151 = 152 Calls to the API

export default function PokemonList() {

    const [firstGenPokemonDetails, setFirstGenPokemonDetails] = useState([]);

    // Code adapted from tutorial https://www.youtube.com/watch?v=lz2tqVkPSsU
    useEffect(() => {
        const fetchFirstGenPokemon = async () => {
            const firstGenPokemonIdsResponse = await fetch(firstGenPokemonPath);
            const firstGenPokemonIdsBody = await firstGenPokemonIdsResponse.json();

            const firstGenPokemonDetails = await Promise.all(
                firstGenPokemonIdsBody.results.map(async (p) => {
                    const pDetails = await fetch(p.url);

                    return await pDetails.json();
                })
            );

            setFirstGenPokemonDetails(firstGenPokemonDetails);
        };

        fetchFirstGenPokemon();
    }, []);

    const renderPokemon = ({ item }) => {
        return (
            <View style={styles.pokemonContainer}>
                <Text style={styles.pokemonTitle}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </Text>
                <Image
                    style={styles.pokemonSprite}
                    source={{
                        uri: item.sprites.front_default,
                    }}
                />
            </View>
        );
    };

    return (
        <View>
            <FlatList data={firstGenPokemonDetails} renderItem={renderPokemon} />
        </View>
    );
}