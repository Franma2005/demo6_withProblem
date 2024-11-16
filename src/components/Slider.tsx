import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { Movie } from '../config/entities/Movie'
import { useMovies } from '../hooks/useMovies';
import ResultMovie from '../config/entities/ResultMovie';

interface Movies {
  moviesAndPage: ResultMovie[];
  height: number;
}

export default function Slider({ moviesAndPage, height }: Movies) {
    return (
      <View>
        <ScrollView style={styles.contenedor} horizontal={true}>
        {
          moviesAndPage.map((movies) => (
            movies.movies.map((item) => (
              <Image style={styles.imagen} key={item.id}
                source={{
                  uri: `https://image.tmdb.org/t/p/original${item.poster}`,
                }}
              />
            ))
          ))
        } 
        </ScrollView>
        
      </View>
    )
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