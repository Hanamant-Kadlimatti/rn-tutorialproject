import React, {Component} from 'react';
import { Dimensions, View, Text, StyleSheet, ScrollView, Image, TextInput, } from 'react-native';
let screenWidth = Dimensions.get('window').width;
class BasicScrollView extends Component {
  
    render(){
        let screenWidth = Dimensions.get('window').width;
        return(
            <ScrollView>
                {/* <Text>Basic scrollview</Text> */}
                <Image source ={require(`../images/Robot.jpeg`)} style={styles.img}></Image>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    img :{
        width : screenWidth,
        height : screenWidth *  800/ 1067,
    }
})

export default BasicScrollView;