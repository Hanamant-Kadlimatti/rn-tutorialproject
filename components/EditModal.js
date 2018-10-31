import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image, Alert, Platform, TouchableOpacity, Dimensions, TextInput} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import FlatListDataWithImage from '../data/FlatListDataWithImage';


var screen = Dimensions.get('window');

class EditModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            foodName : '',
            foodDescription: ''
        }
    }

    showEditModal = (editingFood, flatListItem) => {
        this.setState({
            key: editingFood.key,
            foodName: editingFood.name,
            foodDescription: editingFood.foodDescription,
            flatListItem: flatListItem
        })
        this.refs.myModal.open();
    }

    generateKye = (numberOfCharacters) => {
            return require('random-string') ({length: numberOfCharacters});
    }

    render(){
        return(
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
               <Text style={{fontSize:16, fontWeight:'bold', textAlign:'center', marginTop:40}}> New 'Food Information'</Text>
               <TextInput styel={{height:20, borderBottomColor:'grey', marginLeft:30, marginRight:30, marginBottom:10, borderBottomWidth:1, textAlign:'center'}}
               onChangeText={(text) => {
                   this.setState({foodName: text})
               }} 
               placeholder='Enter New Foods name' value={this.state.foodName}
               />
               
                <TextInput styel={{height:20, borderBottomColor:'grey', marginLeft:30, marginRight:30, marginBottom:10, borderBottomWidth:1, textAlign:'center'}}
                   onChangeText={(text) => {
                        this.setState({foodDescription: text})
                   }}
                   placeholder='Enter New Food Description' value={this.state.foodDescription}
               />

               <Button style={{fontSize:18, color:'white'}}
                  containerStyle={{padding:8, marginLeft:70, marginRight:70, height:40, borderRadius:6, backgroundColor:'mediumseagreen'}}
                  
                  onPress={() => {
                      if(this.state.foodName.length == 0 || this.state.foodDescription.length == 0){
                          alert("You Must enter Food Name & Description");
                          return;
                      }


                    //   Updated Existing Food

                    //   const newKey = this.state.generateKey(24);
                    //     const newFood = {
                    //         key: newKey,
                    //         name: this.state.foodName,
                    //         imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg",
                    //         foodDescription: this.state.foodDescription
                    //   }
                    //   FlatListDataWithImage.push(newFood);    
                    //   this.props.parentFlatList.refreshFlatList(newKey);    
                    
                    var foundIndex = FlatListDataWithImage.findIndex(item => this.state.key === item.key);
                    if(foundIndex < 0) {
                        return;
                    }
                    FlatListDataWithImage[foundIndex].name = this.state.foodName;
                    FlatListDataWithImage[foundIndex].foodDescription = this.state.foodDescription;
                    this.state.flatListItem.refreshFlatListItem();
                      this.refs.myModal.close();  
                  }}
                  > Save
               </Button>

            </Modal>
        )
    }
}

export default EditModal;