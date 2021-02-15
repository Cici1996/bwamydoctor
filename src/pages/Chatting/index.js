import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ChatItem, Header, InputChat} from '../../components'

export default function Chatting() {
    return (
        <View>
            <Header type="dark-profile" title="Uzumaki Naruto"/>
            <Text>Senin, 21 Maret 2020</Text>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <InputChat/>
        </View>
    )
}

const styles = StyleSheet.create({})
