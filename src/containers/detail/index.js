import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class Detail extends Component {

render() {
  return (
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize:20}}>
          DETAIL SCREEN
        </Text>
      </View>
  )
 }
}

export default Detail;
