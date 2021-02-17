import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ChatItem, Header, InputChat} from '../../components'
import { colors, fonts } from '../../utils'

export default function Chatting() {
    return (
      <View style={styles.page}>
        <Header type="dark-profile" title="Uzumaki Naruto" />
        <View style={styles.content}>
          <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
        </View>
        <InputChat />
      </View>
    );
}

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1
    },
    chatDate:{
        fontSize:11,
        fontFamily:fonts.primary.normal,
        color:colors.text.secondary,
        marginVertical:20,
        textAlign:"center"
    },
    content:{
        flex:1,
    }
})
