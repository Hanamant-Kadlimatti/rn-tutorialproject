import React, {Component} from 'react';
import {View, Text, StyleSheet, } from 'react-native';
import Button from 'react-native-button';


class ButtonDisplayHandle extends Component {

    _onPressButton = () => {
       alert('You pressed button')
    }
    render(){
        return(
            <View style={styles.container}>
                {/* <Button title='Submit' onPress={this. _onPressButton}></Button> */}
                <Button style={styles.button1} onPress={this. _onPressButton}> Submit </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create( {
     container : {
         flex: 1,
        //  flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
     },

     button1 : {
         backgroundColor: 'green',
         color: 'white',
        padding : 10,
        borderRadius: 15,
        shadowRadius: 20,
        shadowOpacity : 0.7
     }
})

export default ButtonDisplayHandle;