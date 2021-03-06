import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class FlexdirectionRowAndJustifycontentWithFlexbox extends Component {
    render(){
        return(
            <View style={styles.container}>
                  <Text style={styles.view1}> View1 </Text>
                  <Text style={styles.view2}> View2 </Text>
                  <Text style={styles.view3}> View3 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container : {
        // height : 500,
        // backgroundColor: 'mediumaquamarine',
        flex : 1,
        flexDirection : 'row',             //  'column'
        justifyContent : 'space-evenly'    // 'center' 'space-between' 'flex-start' 'flex-end' 'space-around'
    },
    view1 : {
        height:100,
        width : 100,
        backgroundColor: 'red',
        marginRight: 5
    },
    view2 : {
        height:100,
        width : 100,
        backgroundColor: 'green',
        marginRight: 5
    },
    view3 : {
        height:100,
        width : 100,
        backgroundColor: 'yellow'
    }
})


export default FlexdirectionRowAndJustifycontentWithFlexbox;