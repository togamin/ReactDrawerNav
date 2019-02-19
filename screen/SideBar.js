import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

class SideBar extends React.Component{
  render (){
    return(
      <View style = {styles.container}>
        <Text style = {styles.text}>とがみんブログ</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize:27,
  }
});

export default SideBar;