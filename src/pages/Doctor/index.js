import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DoctorCategory, GoodNewsItem, HomeProfile, RatedDoctor } from '../../components'
import { colors, fonts } from '../../utils'

export default function index() {
    return (
        <View style={styles.page}>
            <HomeProfile/>
            <Text style={styles.welcomeText}>Mau Konsultasi dengan siapa hari ini?</Text>
            <DoctorCategory/>
            <DoctorCategory/>
            <DoctorCategory/>
            <DoctorCategory/>
            <Text>Top Rated Doctor</Text>
            <RatedDoctor/>
            <RatedDoctor/>
            <RatedDoctor/>
            <Text>Good News</Text>
            <GoodNewsItem/>
            <GoodNewsItem/>
            <GoodNewsItem/>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        paddingVertical:30,
        paddingHorizontal:16
    },
    welcomeText:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        marginTop:30,
        marginBottom:16,
        maxWidth:309
    }
})
