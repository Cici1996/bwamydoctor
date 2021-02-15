import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Doctor1 } from '../../assets'
import { Header, ListDoctor } from '../../components'
import { colors } from '../../utils'

export default function ChooseDoctor({navigation}) {
    return (
        <View style={styles.page}>
            <Header title="Pilih Dokter Anak" type="dark" onPress={() => navigation.goBack()}/>
            <ListDoctor type='next' profile={Doctor1} name="Siti Nurbaya" desc="Wanita" onPress={() => navigation.navigate('Chatting')}/>
            <ListDoctor type='next' profile={Doctor1} name="Siti Nurbaya" desc="Wanita"/>
            <ListDoctor type='next' profile={Doctor1} name="Siti Nurbaya" desc="Wanita"/>
            <ListDoctor type='next' profile={Doctor1} name="Siti Nurbaya" desc="Wanita"/>
            <ListDoctor type='next' profile={Doctor1} name="Siti Nurbaya" desc="Wanita"/>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex : 1
    }
})
