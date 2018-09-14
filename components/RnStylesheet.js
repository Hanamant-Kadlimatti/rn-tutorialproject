import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class RnStylesheet extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.firstText}>Hello First Text </Text>
                <Text style={styles.secondText}>Hello Second Text </Text>
                <Text style={styles.thirdText}>Hello Third Text </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container :  {
      marginTop: 10,
      marginRight:20,
      marginLeft:20,
      backgroundColor: 'green',
      borderWidth: 2,
      borderColor : 'red'
    },
    firstText : {
        margin :5,
        color: 'white'
    },
    secondText :{
        margin : 5,
        color: 'yellow',
        fontWeight :'bold'
    }

})

export default RnStylesheet;