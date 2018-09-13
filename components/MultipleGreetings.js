import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Greeting extends Component {
    render(){
        return(
            <Text>Hello {this.props.name}</Text>
        )
    }
}
class MultipleGreetings extends Component {
    render(){
        return(
            <View>
                <Greeting name="Hanamant"></Greeting>
                <Greeting name="Kadliamtti"></Greeting>
            </View>
        )
    }
}

export default MultipleGreetings;