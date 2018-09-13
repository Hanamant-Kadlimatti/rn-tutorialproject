import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Blink extends Component {
    constructor(props){
        super(props)
       this.state = {
        showText : true
       }

        var taskToDo = () => {
           this.setState(previousState => {
               return {
                showText: !previousState.showText
               }
           })
        }
        const timeToBlink =1000;
        setInterval(taskToDo, timeToBlink)
    }

    render(){
        let textToDisplay = this.state.showText ? this.props.inputText : ' ';
        return(
            <View>
              <Text>{textToDisplay}</Text>
            </View>
        )
    }
}

// export default Blink;

class TextBlink extends Component {
    render(){
        return(
            
            <View>
               <Blink inputText='Hi how r u ?'></Blink>
               <Blink inputText='How is going on ? ?'></Blink>
            </View>
        )
    }
}
export default TextBlink;