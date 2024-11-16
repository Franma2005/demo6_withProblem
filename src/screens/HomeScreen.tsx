import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/useMovies'
import Slider from '../components/Slider';

export default function HomeScreen() {

    const { nowPlaying, setNowPlaying, loading, reload, setReload } = useMovies();

    return (
        <View>
            <Text>HomeScreen</Text>
            <Slider movies={nowPlaying?.movies} height={100} />
            <Button onPress={() => {
                if (nowPlaying != null) {
                    // Crear un nuevo objeto clonando el estado actual
                    const updatedNowPlaying = {
                        ...nowPlaying,
                        page: nowPlaying.page + 1, // Incrementar la página
                    };
                    setNowPlaying(updatedNowPlaying);
                    setReload(reload + 1);
                }
            }} title='PRESS BUTTON TO SEE THE NEXT PAGE' />
        </View>
    )
}

const styles = StyleSheet.create({})