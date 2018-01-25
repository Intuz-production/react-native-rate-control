/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal
} from 'react-native';

import RateController from './app/component/RateController';

export default class App extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            
            rateModalVisible: false,
            otherParamsToSend: 1,
        };
    }

    btnStarPopup(){
        this.setState({rateModalVisible: true});
    };

    callbackAfterRate(rating, comment,otherValue) {
        this.setState({rateModalVisible: false});
        console.log("stars >> "+rating+" comment >> "+comment +" otherValue >> "+otherValue);
    }


  render() {
    var otherParamsToSend;
    var rateModel = <Modal style={{
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0
    }} transparent={true} visible={this.state.rateModalVisible} onRequestClose={() => {
        this.setState({rateModalVisible: false});
    }}>
        <RateController callbackAfterRate={this.callbackAfterRate.bind(this)} otherParamsToSend={this.state.otherParamsToSend}/>
    </Modal>


    return (
      <View style={{padding: 10,backgroundColor:'white',justifyContent:'center', alignItems:'center' }}>

        <TouchableOpacity onPress={this.btnStarPopup.bind(this)}>
          <Text style={{fontSize: 16, backgroundColor:'white', color:'black'}}>
           Open Rating popup
          </Text>
          </TouchableOpacity>
        {rateModel}
      </View>
    );
  }
}