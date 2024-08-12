import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Header() {
  return (
    <View style={styles.viewHeader}>
        <Icon name={'notebook'} size={27} color={'white'}/>
        <Text style={styles.textHeaderTitle}>To-Do App by AmySidra v.1</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    textHeaderTitle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 10,
      },
      viewHeader:{
        backgroundColor: '#6600E7',
        height: 50,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
      },
})