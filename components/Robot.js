import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


class Robot extends Component {
    render(){
        // const img = {uri : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/800px-HONDA_ASIMO.jpg"}
        return(
            <View style={styles.container}>
                <Image source={{uri : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/800px-HONDA_ASIMO.jpg"}} style={{width:200, height:200}}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default Robot;

