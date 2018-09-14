import React, {Component} from 'react';
import {View, Text, StyleSheet} from  'react-native';


class CustomizeWidthHeightFixedDimension extends Component {
      render(){
          return(
             <View>
                  <View style={styles.container1}>
                  </View>
                  <View style={styles.container2}>
                  </View>
                  <View style={styles.container3}>
                  </View>
                  <View style={styles.container4}>
                  </View>
             </View>
          )
      }
}

const styles = StyleSheet.create({
    container1 : {
            width :20,
            height: 20,
            backgroundColor : 'orange'
    }, 
    containe1r : {
            width :50,
            height: 50,
            backgroundColor : 'blue'
        },
    container2 : {
            width :70,
            height: 70,
            backgroundColor : 'yellow'
    },
    container3 : {
        width :150,
        height: 150,
        backgroundColor : 'red'
    }  ,
    container4 : {
        width :200,
        height: 200,
        backgroundColor : 'green'
    }  

})

export default CustomizeWidthHeightFixedDimension;