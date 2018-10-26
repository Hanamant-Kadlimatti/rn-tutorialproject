import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import FlatListDataWithImage from '../data/FlatListDataWithImage'


class FlatListItem extends Component { 
    render (){
        return (
            <View style={{flex : 1, flexDirection : 'column'}}>
                <View style={{flex : 1, flexDirection : 'row', backgroundColor: 'mediumseagreen'}}>
                <Image style={styles.img} source={{uri : this.props.item.imageUrl}}></Image>
                
                <View style={{flex:1, flexDirection:'column', height:100}}>
                <Text style={styles.flatlistitem}> {this.props.item.name} </Text>
                <Text style={styles.flatlistitem}> {this.props.item.foodDescription} </Text>
                </View>
            </View>
            
            <View style={{height:1, backgroundColor: 'white'}}>

            </View>
            </View>
        )
    }
}


class FlatListWIthImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                 <FlatList
                   data={FlatListDataWithImage}
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
        fontSize: 14
    },
    img : {
        width: 100,
        height : 100,
        margin : 5
    }
})


export default FlatListWIthImage;