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
                // Cuando se pulsa un boton
                //nowPlaying no es null
                if (nowPlaying != null) {
                    //* Guardamos el array en otro nuevo, porque los estados no se renderizan si cambian solo se renderizan si se establece uno nuevo
                    const updatedArray = [...nowPlayingArray, nowPlaying]; // ... Es un operador que descompone el array en elementos tipo ResultMovie[]
                    //* Guardamos el nuevo array y ademas renderizamos el componente perfecto para que nuestro slider se renderice. (Perfecto dentro
                    //* de lo que cabe esta bastante horrible)
                    setNowPlayingArray(updatedArray);
                    nowPlayingArray.forEach((item) => {
                        console.log(`ITEM SUPREMO ${JSON.stringify(item)}`)
                    })
                    //* Crear un nuevo objeto clonando el estado actual
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