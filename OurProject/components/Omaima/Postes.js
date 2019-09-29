import React, { Component } from "react";
import {
 
  ScrollView,
  View,
  Text,
 
  Button,
  
} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';



export default class Postes extends React.Component {
 
  render() {
  
    return (
        <View>
         
        
 
 <Card>
   <CardImage 
      // source={{uri: 'http://bit.ly/2GfzooV'}} 
      // title="Top 10 South African beaches" 
      source={{uri: this.props.post.img}} 
      title="Top 10 South African beaches-test" 
  />

   
   <CardTitle 

   
   />
   <CardContent text={this.props.post.category}/>
   <CardContent text={this.props.post.state}/>
   <CardAction >
     <CardButton
       onPress={() => {}}
       title="send to me"
       color="#FEB557"
     />
    
   </CardAction>
 </Card>




     
       
    </View>
    );
  }
}