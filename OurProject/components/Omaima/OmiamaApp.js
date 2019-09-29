import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
 
} from 'react-native';
import axios from "axios";

 import Postes from './Postes'
//  import WelcomeScreen from './WelcomeScreen'
// import Search from './Search'

import DropdownMenu from 'react-native-dropdown-menu';
import {createSwitchNavigator, createAppContainer  } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator}from 'react-navigation-stack'
import { Icon, Header } from "react-native-elements";
// import Icon from '@expo/vector-icons/Ionicons'

export default class App extends React.Component {
  state ={
    missingItem :[],
    city:"",
    cityChoose: false,
    type:'',
    

  }
  getData=(cat)=>{
  
    var selectedCity = this.state.city?this.state.city:'amman'
    let missingItem ={ cat:cat,
    city :selectedCity}
    console.log('react',missingItem,`http://192.168.43.105:9000/Omaima/FILTER/${missingItem}`)
      axios
        .get(`http://10.60.197.96:9000/Omaima/FILTER/${missingItem.cat}/${missingItem.city}`)
        .then(res => {
          this.setState({ missingItem: res.data });
        //  console.log("data", this.state.missingItem);
          console.log("yasmin", res.data)
        })
        .catch(err => {
          console.log(err);
        });
        
    }
    
  render(){
   
    var data = [['amman','madaba','زرقاء','salt','جرش','العقبه','الكرك','معان','الطفيله','عجلون','اربد']];
    
    return (
      
      
  <View style={styles.container}>
    {/* <AppContainer /> */}
    {/* <Header style={{flex: 1}} > */}
    
        {/* <View style={{height: 10 ,width:200,marginRight:30 }}  /> */}
        {/* <View> */}
        
        <DropdownMenu 
        
          // style={{marginRight:200,}}
          
          bgColor={'#E91E63'}
          tintColor={'black'}
          activityTintColor={'green'}
          handler={(selection,row) => {this.setState({city: data[selection][row]})
         {console.log('selection',this.state.city,"/////",selection,data[0][0])}
        }
        }
       
          
          data={data}
        >

         

        </DropdownMenu>
        
        {/* flexDirection:"row" */}
      
    <View style={{flexDirection:"row"}} >
      <React.Fragment  >
                  <TouchableOpacity style={styles.addButton} onPress={this.getData.bind(this,"animals")} >
                      <Text style={styles.addButtonText} > animals</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.addButton}  onPress={this.getData.bind(this,"electronics")} >
                      <Text > electronics</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  style={styles.addButton} onPress={this.getData.bind(this,"stuff")}  >
                      <Text style={styles.addButtonText} >stuff</Text>
                  </TouchableOpacity>
                  </React.Fragment>
                  </View>
                  {/* </Header> */}
                  {/* </View> */}
                 < ScrollView>
                  {/* <Text>Hello from here !</Text> */}
                {console.log("data", this.state.missingItem)}

                  {this.state.missingItem.map((post, indx) => {
                    return (
              <View>
              {/* <Text>Hello from here !</Text> */}
               <Postes
                key={indx}
                post={post}/>
                 
               
               </View>
              
              );
            })}
           </ScrollView>
       {/* <Navigation/> */}
       
                
   </View>
  );
}}



const styles = StyleSheet.create({
    container:{
        flex:1,
        // padding:10
    
    },
    header:{
      // padding:100,
      // backgroundColor:'#E91e63',
      alignItems:'flex-end',
      borderBottomWidth:10,
      borderBottomColor:'#ddd',
    },
    
      addButton:{
    
        
        zIndex:11,
        // right:30,
        bottom:10,
        backgroundColor: '#E91E63',
        width:90,
        height:90,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        elevation:8,
        
      },
      addButtonText:{
        color:'#fff',
        // fontSize:24,
        
      }
    });