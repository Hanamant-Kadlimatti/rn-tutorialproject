import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image } from 'react-native';
import flatListData from '../data/flatListData'

class FlatListItem extends Component { 
    render (){
        return (
            <View style={{ backgroundColor : this.props.index % 2 ==0 ? 'mediumseagreen' : 'tomato'}}>
                <Text style={styles.flatlistitem}> {this.props.item.name} </Text>
                <Text style={styles.flatlistitem}> {this.props.item.foodDescription} </Text>
            </View>
        )
    }
}

class FlatListDataExample extends Component {
    render() {
        return (
            <View style={styles.container}>
                 <FlatList
                   data={flatListData}
                   renderItem = { ({item, index}) => {
                        //  console.log('Item = ${JSON.Stringfy(item)}, index = ${index}')
                        return (
                            <FlatListItem item={item} index={index}>

                            </FlatListItem>
                        );
                   }}
                 >
                 </FlatList>    
            </View>
         )
    }
}

const styles = StyleSheet.create ( {
    container : {
        flex : 1,
        marginTop : 20
    },
    flatlistitem : {
        color: 'white',
        padding : 10,
        fontSize: 16
    },
    img : {
        width: 100,
        height : 100,
        margin : 5
    }
})

export default FlatListDataExample;