import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

 class VerticalScrollView extends Component {
  render() {
    return (
        <View>
             <Text style={{textAlign:'center', color : 'mediumseagreen', marginTop: 50, fontSize : 20}}> Select Your Loyalty Card</Text>
            <ScrollView showsVerticalScrollIndicator={true} style={{marginTop :80, marginBottom :220}} >
           
        <View ><Text style={styles.welcome}> Loyalty1 </Text></View>
        <View ><Text style={styles.welcome}> Loyalty2 </Text></View>
        <View ><Text style={styles.welcome}> Loyalty3 </Text></View>
        <View ><Text style={styles.welcome}> Loyalty4 </Text></View>
        <View ><Text style={styles.welcome}> Loyalty5 </Text></View>
        <View ><Text style={styles.welcome}> Loyalty6 </Text></View>
        <View ><Text style={styles.welcome}> Loyalty7 </Text></View>
        <View ><Text style={styles.welcome}> Loyalty8 </Text></View>
        <View ><Text style={styles.welcome}> Loyalty9 </Text></View>
        <View ><Text style={styles.welcome}> Loyalty10 </Text></View>
        <View ><Text style={styles.welcome}> Loyalty11 </Text></View>
        <View ><Text style={styles.welcome}> Loyalty12 </Text></View>
     </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    welcome: {
      flex: 1,
      margin: 20,
      backgroundColor: 'orange',
      height: 250,
      textAlign: 'center',
      fontSize: 20,
      paddingTop: 100,
      color: 'white'
    }
  });

export default VerticalScrollView;