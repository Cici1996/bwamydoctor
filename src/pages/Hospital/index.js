import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Hospital3,Hospital2,Hospital1, ILHospitalBG } from '../../assets'
import { ListHospital } from '../../components'
import { colors, fonts } from '../../utils'

export default function Hospital() {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style={styles.ImageBackground}>
            <Text style={styles.title}>Nearby Hospitals</Text>
            <Text style={styles.desc}>3 Tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ListHospital name="Citra Kirani" type="Rumah Sakit" address="jln surya sumatri 28" pic={Hospital1}/>
                <ListHospital name="Citra Kirani"  type="Rumah Sakit Anak" address="jln surya sumatri 28" pic={Hospital2} />
                <ListHospital name="Citra Kirani"  type="Rumah Sakit Jiwa" address="jln surya sumatri 28"  pic={Hospital3}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ImageBackground:{
        height:240,
        paddingTop:30
    },
    title:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        color:colors.white,
        textAlign:'center'
    },
    desc:{
        fontSize:14,
        fontFamily:fonts.primary[300],
        color:colors.white,
        marginTop:6,
        textAlign:'center'
    },
    page:{
        backgroundColor:colors.secondary,
        flex:1
    },
    content:{
        backgroundColor:colors.white,
        flex:1,
        borderRadius:20,
        marginTop:-30,
        paddingTop:14
    }
})
