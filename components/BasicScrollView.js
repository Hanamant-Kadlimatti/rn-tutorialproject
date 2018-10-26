import React, {Component} from 'react';
import { Dimensions, View, Text, StyleSheet, ScrollView, Image, TextInput, } from 'react-native';
let screenWidth = Dimensions.get('window').width;
class BasicScrollView extends Component {
  
    render(){
        let screenWidth = Dimensions.get('window').width;
        return(
            <ScrollView>
                <Image source ={require(`../images/Robot.jpeg`)} style={styles.img}></Image>
                <Text style={styles.text}>Basic scrollview</Text>
                <TextInput style={styles.textinput} placeholder='Enter your text'/>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    img :{
        width : screenWidth,
        height : screenWidth *  800/ 1067,
        marginTop : 10,
    },
    text : {
         padding : 15,
         fontSize :20,
         textAlign : 'center',  
         color : 'white',
         backgroundColor : 'green'
    },
    textinput : {
        padding : 10,
        margin : 10,
        // boarderWidth : 1
    }
})

export default BasicScrollView;