import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView, Dimensions} from 'react-native';

let screenWidth = Dimensions.get('window').width
class HorizontalScrollView extends Component {
  
    render(){
        let screenWidth = Dimensions.get('window').width
        let screenHeight = Dimensions.get('window').height
        return(
            <ScrollView 
                    vertical={true} 
                    pagingEnabled={true} 
                    // showHorizontalScrollingIndicator={true} 
                    // onMomentumScrollBegin={() => {alert("Begin Screen")}} 
                    // onMomentumScrollEnd={() => {alert("End Screen")}}
                    // onScroll={(event)=>{
                    //     let logData = 'Scrolled to x = ${event.nativeEvent.contentOffset.x}, Scrolled to y = ${event.nativeEvent.contentOffset.y}'
                    //     console.log(logData)
                    // }}
                    // scrollEventThrottle={10}
                    >
                <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>    
                <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>      
                <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>      
                <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>      
                <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>        
                <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>      
                <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>      
                <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>      
                <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>      
                <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>      
                <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>      
                <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>      
                <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>      

                 <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>      
                <View style={styles.view1}>
                   <Text style={styles.tetx1}> Screen1 </Text>
                </View>  

                <View style={styles.view2}>
                   <Text style={styles.text2}> Screen2 </Text>
                </View> 

                 <View style={styles.view3}>
                   <Text style={styles.text3}> Screen3 </Text>
                </View>  
                <View style={styles.view4}>
                   <Text style={styles.text4}> Screen4 </Text>
                </View>      
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
   view1 : {
       flex : 1,
       backgroundColor : '#5f9ea0',
       justifyContent : 'center',
       alignItems : 'center',
       margin : 20,
       height: 200,
    width: 300,
    //    width : screenWidth
   },
   tetx1 : {
       color : 'white'
   },
   view2 : {
    flex : 1,
    backgroundColor : '#663399',
    justifyContent : 'center',
    alignItems : 'center',
    margin : 20,
    height: 200,
    width: 300,
    // width : screenWidth
},
text2 : {
    color : 'white'
},
view3 : {
    flex : 1,
    backgroundColor : 'green',
    justifyContent : 'center',
    alignItems : 'center',
    margin : 20,
    height: 200,
    width: 300,
    // width : screenWidth
},
text3 : {
    color : 'white'
},
view4 : {
    flex : 1,
    backgroundColor : 'yellow',
    justifyContent : 'center',
    alignItems : 'center',
    margin : 20,
    height: 200,
    width: 300,
    // width : screenWidth
},
text4 : {
    color : 'white'
}
})

export default  HorizontalScrollView