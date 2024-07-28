import React from 'react';  
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';  //flatlist => carregando rolagem !

const movies = [  
    {  
        id: '1',  //facilita a rolagem da tela
        title: 'O Rei Leão',  
        director: 'Jon Favreau',  
        origin: 'EUA',  
        year: '1994',  
        poster: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/28/19962110.jpg' 
    },  
    {  
        id: '2',  
        title: 'Haikyuu!!: Batalha do Lixão',  
        director: ' Susumu Mitsunaka',  
        origin: 'Japão',  
        year: '2024',  
        poster: 'https://br.web.img3.acsta.net/c_310_420/pictures/24/02/21/17/34/3269120.jpg'
    },  
    {  
        id: '3',  
        title: 'Capitão América 2: Soldado Invernal',  
        director: 'Anthony e Joe Russo',  
        origin: 'EUA',  
        year: '2014',  
        poster: 'https://br.web.img2.acsta.net/c_310_420/pictures/14/02/03/20/36/257136.jpg'  
    },  
    {  
        id: '4',  
        title: 'Maquia: Quando a Promessa da Flor Bloom',  
        director: 'Mari Okada',  
        origin: 'Japão',  
        year: '2018',  
        poster: 'https://m.media-amazon.com/images/I/81QDSApOTuL._AC_SL1500_.jpg'  
    },  
];  

const MovieItem = ({ movie }) => {  
    return (  
        <View style={styles.movieContainer}>  
            <Image source={{ uri: movie.poster }} style={styles.poster} />  
            <Text style={styles.title}>{movie.title}</Text>  
            <Text style={styles.director}>Diretor: {movie.director}</Text>  
            <Text style={styles.origin}>Origem: {movie.origin}</Text>  
            <Text style={styles.year}>Ano: {movie.year}</Text>  
        </View>  
    );  
};  

const App = () => {  
    return (  
        <View style={styles.container}>  
            <Text style={styles.header}>Lista de Filmes !</Text>  
            <FlatList  
                data={movies}  
                renderItem={({ item }) => <MovieItem movie={item} />}  
                keyExtractor={item => item.id}  
                contentContainerStyle={styles.listContainer}  
            />  
        </View>  
    );  
};  

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        padding: 20,  
        backgroundColor: 'white',  
    },  
    header: {  
        fontSize: 24,  
        fontWeight: 'bold',  
        marginBottom: 20,  
    },  
    listContainer: {  
        alignItems: 'center',  
    },  
    movieContainer: {  
        backgroundColor: 'white',  
        borderRadius: 8,  
        marginBottom: 20,  
        padding: 10,  
        width: 200,  
        alignItems: 'center',  
        shadowColor: '#000',  
        shadowOffset: {  
            width: 0,  
            height: 2,  
        },  
        shadowOpacity: 0.1,  
        shadowRadius: 2,  
        elevation: 2,  
    },  
    poster: {  
        width: '100%',  
        height: 300,  
        borderRadius: 8,  
    },  
    title: {  
        fontSize: 16,  
        fontWeight: 'bold',  
        marginTop: 10,  
    },  
    director: {  
        marginTop: 5,  
        fontSize: 14,  
        color: '#666',  
    },  
    origin: {  
        fontSize: 14,  
        color: '#666',  
    },  
    year: {  
        marginBottom: 5,  
        fontSize: 14,  
        color: '#666',  
    },  
});  

export default App;