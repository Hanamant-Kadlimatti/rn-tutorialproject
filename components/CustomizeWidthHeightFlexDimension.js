import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class CustomizeWidthHeightFlexDimension extends Component {
    render(){
        return(
            <View style={styles.container}>

                <View style={styles.container1}>     
                </View>

                <View style={styles.container2}>    
                </View>

                 <View style={styles.container3}>    
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        // height: 500
    },
    container1 : {
        flex: 20,
        backgroundColor: 'mediumaquamarine'
    },
    container2 : {
        flex: 80,
        backgroundColor: 'red'
    },
    container3 : {
        height: 123,
        backgroundColor: 'darkslategrey'
    }
})

export default CustomizeWidthHeightFlexDimension;