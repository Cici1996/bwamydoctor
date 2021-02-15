import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { colors } from '../../../utils'
import { Button } from '../../atoms'

export default function DarkProfile() {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back-light"/>
            <Text>Uzumaki Naruto</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.secondary,
        paddingVertical:30,
        paddingLeft:20,
        paddingRight:16,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    }
}) 