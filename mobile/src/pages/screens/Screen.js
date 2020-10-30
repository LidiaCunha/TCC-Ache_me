import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default class Screen extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity 
                        style={{alignItems: "flex-end", margin: 16}} 
                        onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 nome="bars" size={24} color="#fff"></FontAwesome5>
                    </TouchableOpacity>
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text style={styles.text}>{this.props.nome}</Text>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#292929",
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "500",
    }
})