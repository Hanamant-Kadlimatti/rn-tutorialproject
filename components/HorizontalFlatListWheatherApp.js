import React, { Component } from 'react';
import {
    AppRegistry,
    FlatList, StyleSheet, Text, View, Image, ImageBackground,
    Alert, Platform, TouchableHighlight, TouchableOpacity
} from 'react-native';

import { horizontalStatus } from '../data/HorizontalFlatListData';
import { horizontalFlatListData } from '../data/HorizontalFlatListData';

import Icon from 'react-native-vector-icons/Ionicons';

class HorizontalFlatListItem extends Component{
    render(){
        return(
            <View style={{flex:1, flexDirection:'column', alignItems:'center', width:100, borderRadius:10, height:130, borderWidth:1, borderColor:'grey', margin:4}}>
            <TouchableOpacity style={{position:'absolute', top:0, bottom:0, right:0, left:0}} 
           onPress={() => {
            alert(`You pressed: ${this.props.item.hour}`);                    
             }}   
             >               

            </TouchableOpacity>
               
               <Text style={{fontSize:16, fontWeight:'bold', color:'white', margin:20}}> {this.props.item.hour} </Text>
               <Icon  name={(Platform.OS === 'ios') ? this.props.item.status.ios : this.props.item.status.android} size={30} color='white'/>
               <Text style={{fontSize:16, fontWeight:'bold', color:'white'}}> {this.props.item.degrees} °F </Text>
            </View>
        )
    }
}

class HorizontalFlatListWheatherApp extends Component {
    render(){
        return(
            <View style={{flex:1, flexDirection:'column', marginTop: Platform.OS === 'ios' ? 34 : 0}}>
            
                  <View style={{position:'absolute', top:0, right:0, left:0, bottom:0}}>
                    <Image source={require('../images/hanamant.jpg')} 
                    style={{flex:1, flexDirection:'column', width: null, height: null, backgroundColor:'transparent', justifyContent:'center'}}></Image>  
                  </View>
                <Text style={{fontSize:16, color:'black', margin:10, backgroundColor:'transparent'}}> Wheather Forecast</Text>
                       <FlatList style={{opacity:0.5, backgroundColor:'black'}} 
                       horizontal={true}
                       data={horizontalFlatListData}
                       renderItem={({item, index}) => {
                           return (
                               <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>

                               </HorizontalFlatListItem>
                           )
                       }}
                       keyExtractor={(item, index) => item.hour}
                       >

                       </FlatList>
                
            </View>
        )
    }
}

export default HorizontalFlatListWheatherApp;