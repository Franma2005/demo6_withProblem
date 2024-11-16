import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/useMovies'
import Slider from '../components/Slider';

export default function HomeScreen() {

    const { nowPlaying, setNowPlaying, loading, nowPlayingArray, setNowPlayingArray } = useMovies();

    return (
        <View>
            <Text>HomeScreen</Text>

            <Slider moviesAndPage={nowPlayingArray} height={100} />

            <Button onPress={() => {
                if (nowPlaying != null) {
                    const updatedArray = [...nowPlayingArray, nowPlaying];
                    setNowPlayingArray(updatedArray);
                    nowPlayingArray.forEach((item) => {
                        console.log(`ITEM SUPREMO ${JSON.stringify(item)}`)
                    })
                    // Crear un nuevo objeto clonando el estado actual
                    const updatedNowPlaying = {
                        ...nowPlaying,
                        page: nowPlaying.page + 1, // Incrementar la página
                    };
                    setNowPlaying(updatedNowPlaying);
                }
            }} title='PRESS BUTTON TO SEE THE NEXT PAGE' />
        </View>
    )
}

const styles = StyleSheet.create({})