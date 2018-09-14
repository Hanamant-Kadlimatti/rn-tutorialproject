import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, keyboard} from 'react-native';


class TextInputEmailPassword extends Component {

    constructor (props){
        super(props);
        this.state = {
            typedText : 'Type your texte here',
            typedPassword : '',
            typedDescription : ''
        }
    }

    // componentWillMount (){
    //     this.keyboardDidShowListener = keyboard.addListener('keyboardDidShow', () => {
    //               this.setState( () => {
    //                   return {
    //                     typedText : 'keyboard is shown'
    //                   }
    //               })
    //     })

    //     this.keyboardDidHideListener = keyboard.addListener('keyDidHide', () => {
    //            this.setState( () => {
    //                return {
    //                 typedText : 'keyboard is Hide'
    //                }
    //            })
    //     })
    // }

    // componentWillUnmount () {
    //     this.keyboardDidShowListener.remove()
    //     this.keyboardDidHideListener.remove()
    // }

    loginSubmit = () => {
        alert('kdshfiushdinhsdifhisdhsd')
    }

    render(){
        return(
            <View>

                <TextInput  placeholder='Entet user email' style={styles.userName} 
                          keuboardType='email-address' placeholderTextColor='red' onchangeText={(text) => {
                                         this.setState(
                                             (previousState) => {
                                               return {
                                                typedText: text 
                                               }
                                             }
                                         )
                           }}/>

                   <Text>{this.state.typedText}</Text>

                <TextInput  placeholder='Entet user password' style={styles.password} keyboardType ='default' secureTextEntry={true}
                        onchangeText={(text) => { this.setState( (previousState) => {
                            return {
                                typedPassword :text
                            }
                        })}}/>

                <TextInput style={styles.multlineText} 
                multiline={true}
                borderBottomColor = 'green'
                borderBottomWidth = {3}
                borderLeftColor = 'green'
                borderLeftWidth = {3}
                borderRightColor = 'green'
                borderRightWidth = {3}
                editable = {true} // editable = {false}
                autoFocus ={true}
                returnKetType='done'
                // onSubmitEditing = {keyboard.dismiss}
                onchangeText = {(text) => {this.setState( () => {
                    return{
                        typedDescription : text
                    }
                })}}
                />

                {/* <Button title='Login' onPress={this.loginSubmit}></Button> */}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
    userName : {
       height : 40,
       margin : 15,
       padding:10,
       borderWidth : 1,
       borderColor : 'gray'

    },
    password : {
       height : 40,
       margin : 15,
       margin : 15,
       padding:10,
       borderWidth : 1,
       borderColor: 'gray'
    },
    multlineText : {
        height : 100,
       margin : 15,
       padding:10,
       borderWidth : 1,
       borderColor : 'gray'

    }
})

export default TextInputEmailPassword;