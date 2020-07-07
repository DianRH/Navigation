import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

class Home extends Component {

render() {
  const { navigation } = this.props;

  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize:20}}>HOME SCREEN</Text>
      <Button
        title="Go to detail"
        onPress={()=> navigation.navigate('Detail')}
       />
    </View>
  )
 }
}

export default Home;
