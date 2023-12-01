import {StyleSheet} from "react-native";

const homeStyles = StyleSheet.create({
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
export default homeStyles;