import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image, Alert} from 'react-native';
import Swipeout from 'react-native-swipeout'
import FlatListDataWithImage from '../data/FlatListDataWithImage'

import AddModal from './AddModal'
import EditModal from './EditModal'


class FlatListItem extends Component {
    constructor (props){
        super(props)
        this.state = {
          activeRowKey : null, 
          numberOfRefresh : 0
        }
    }
    refreshFlatListItem = () =>{
        this.setState((prevState)  => {
              return {
                numberOfRefresh: prevState.numberOfRefresh + 1
              }
            })
    }

    render (){
        const swipeSettings = {
            autoClose : true,
            onClose : (secId, rowId, direction)=> {
                if(this.setState.activeRowKey != null){
                    this.setState({activeRowKey: null});
                }
                
            },
            onOpen : (secId, rowId, direction) =>{
                this.setState({activeRowKey: this.props.item.key});
            },

            //swiping out from right side you can use swiping out left sidel also using => 'lfet'
            right : [ 
                {
                    onPress:() => {
                    //   alert("Update")
                    this.props.parentFlatList.refs.editModal.showEditModal(FlatListDataWithImage[this.props.index], this)
                    },
                    text: 'edit', type:'primary'
                }, 
                {
                    onPress: () => {
                        const deletingROw= this.state.activeRowKey;
                       Alert.alert(
                           'Alert',
                           'Are You sure want to Delete ?',
                           [
                               {text :'No', onPress : () => console.log('Cancel Pressed'), style: 'cancel'},
                               {text :'Yes', onPress : () => {
                                FlatListDataWithImage.splice(this.props.index, 1)
                                //Refresh
                                this.props.parentFlatList.refreshFlatList(deletingROw)
                               }}
                           ]
                       )
                    },
                   text : 'Delete', type: 'delete'
                }
            ],
            rowId : this.props.index,
            sectionId : 1,
        }
        return (
          <Swipeout {...swipeSettings}>
               <View style={{flex:1, flexDirection:'column'}}>
                <View style={{flex:1, flexDirection: 'row', backgroundColor:'mediumseagreen'}}>
                <Image style={styles.img} source={{uri : this.props.item.imageUrl}}></Image>
               <View style={{flex:1, flexDirection:'column'}}>
               <Text style={styles.flatlistitem}>{this.props.item.name}</Text>
                <Text style={styles.flatlistitem}>{this.props.item.foodDescription}</Text>
               </View>
            </View>

             <View style={{height:1, backgroundColor:'white'}}>

             </View>
           </View>
          </Swipeout>
        )
    }
}

class FlatListSwipeOutEdit extends Component{
    constructor (props){
        super(props)
        this.state = {
            deletedRowKey : null
        }
    }
    refreshFlatList = (deletedRowKey) =>{
         this.setState((prevState) => {
            return {
                deletedRowKey : deletedRowKey
            }
         })
    }
    render(){
        return (
            <View style={styles.container}>
                <FlatList
                 data={FlatListDataWithImage}
                 renderItem={({item, index}) => {
                    return (
                        <FlatListItem item={item} index={index} parentFlatList={this}>

                        </FlatListItem>
                    )
                 }}
                >

                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this} >

                </AddModal>

                 <EditModal ref={'editModal'} parentFlatList={this} >

                </EditModal>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        // marginTop : 10
    },
    flatlistitem : {
        // color: 'white',
        padding : 10,
        fontSize: 16
    },
    img : {
        width: 100,
        height: 100,
        margin : 5
    }
})

export default FlatListSwipeOutEdit;