import React, {Component} from 'react';
import {View, Text, StyleSheet, SectionList, Platform} from 'react-native';
import {SectionListData} from '../data/SectionListData'

class SectionListItem extends Component {
   render(){
     return(
       <View style={{flex:1,flexDirection:'column', backgroundColor:'white'}}>
           <Text style={{fontSize:16, fontWeight:'bold', color: 'black', marginLeft:20, marginRight:10}}>
                {this.props.item.name}
           </Text>
           
           <Text style={{fontSize:13,   marginLeft:20, marginRight:10}}>
                {this.props.item.description}
           </Text>
           <View style={{height:1, backgroundColor:'grey'}}></View>
       </View>
     )
   }
}

class SectionHeader extends Component {
  render(){
    return(
         <View style={{flex:1, backgroundColor:'lightgrey'}}>
            <Text style={{fontSize:14, color: 'black', margin : 7}}>
                 {this.props.section.title}
            </Text>
         </View>
    )
  }
}

class BasicSectionList extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <SectionList
                  renderItem={({item, index}) => {
                    return(
                      <SectionListItem item={item} index={index}>

                      </SectionListItem>
                    )
                  }}
                  renderSectionHeader={({section}) => {
                    return(<SectionHeader  section={section}/>);
                  }}
                  sections={SectionListData}
                  keyExtractor={(item, indes) => item.name}
                >


                </SectionList>
            </View>
          
        )
    }
}

export default BasicSectionList;