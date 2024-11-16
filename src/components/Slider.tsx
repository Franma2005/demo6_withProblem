import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { Movie } from '../config/entities/Movie'
import { useMovies } from '../hooks/useMovies';

interface Movies {
  movies: Movie[] | undefined;
  height: number;
}

export default function Slider({ movies, height }: Movies) {
  
  if (movies != null) {
    return (
      <View>
        <ScrollView style={styles.contenedor} horizontal={true}>
          {movies?.map((item) => (
            <Image style={styles.imagen} key={item.id}
              source={{
                uri: `https://image.tmdb.org/t/p/original${item.poster}`,
              }}
            />
          ))}
        </ScrollView>
        
      </View>
    )
  }
  return (
    <View>
      <Text>Error de conexión</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    height: 300,
  },
  imagen: {
    width: 200,
    //height: 200,
    margin: 1
  }
})