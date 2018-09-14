import React, {Component} from 'react';
import {View, Text, StyleSheet,Image, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';


class TouchableHilight extends Component {
    _onPreeButton = () => {
        alert("Hi Touuuuuuuuu")
    }
    render(){
        return(
            <View style={styles.conatiner}>

                 <TouchableHighlight underlayColor ='red' onShowUnderlay={() => { alert("Hi Touchable")}} onPress={this._onPreeButton}>
                    <View style={styles.container1}>
                    {/* <Image style={styles.img} source ={require(`../images/Robot.jpeg`) }></Image> */}
                    <Text style={styles.text1}>TouchableHighlight</Text>
                    </View>
                 </TouchableHighlight>

                 <TouchableNativeFeedback onPress={this._onPreeButton} useForground={false}>
                     <View style={styles.container2}>
                         <Text style={styles.text2}> TouchableNativeFeedback </Text>
                     </View>
                 </TouchableNativeFeedback>

                 <TouchableOpacity  onPress={this._onPreeButton} activeOpacity={0.7}> 
                      <View style={styles.container3}>
                           <Text style={styles.text3}> TouchableOpacity</Text>
                      </View>
                 </TouchableOpacity>

                 <TouchableWithoutFeedback  onPress={this._onPreeButton}  
                 onPressIn={ () => {alert('onPressIn');}} 
                 onPressOut={ () => {alert('onPressOut');}} 
                 disabled={false}
                  onLongPress={() => {alert('onLongPress')}}>
                     <View style={styles.container4}>
                         <Text style={styles.text4}> TouchableWithoutFeedback</Text>
                     </View>
                 </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
     conatiner : {
         flex: 1,
        //  flexDirection: 'row',
         justifyContent: 'center',
         alignItems : 'center',
         backgroundColor: 'yellow'

     },
     container1 : {
         backgroundColor : 'green',
     },
     text1 : {
         color: 'white',
         padding: 10,
         fontSize : 15
     },
     container2 : {
        margin : 20,
        height : 80,
        width : 150,
        backgroundColor: 'blue'
    },
    text2 : {
        color: 'white',
        padding: 10,
        fontSize : 15
    },
    container3 : {
        backgroundColor : 'mediumaquamarine'
    },
    text3 : {
      color : 'white',
      padding: 10,
      fontSize : 15
    },
    container4 : {
        backgroundColor : 'black',
        margin : 20,
    },
    text4 : {
      color : 'white',
      padding: 10,
      fontSize : 15
    },
     img : {
         width : 100,
         height: 40
     }
})

export default TouchableHilight;