import React from "react";
import { createAppContainer,createStackNavigator,createDrawerNavigator } from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import SideBar from './screen/SideBar';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen,
          navigationOptions:({ navigation }) =>({
            //ヘッダーの文字
            headerTitle:'Home',
            headerLeft: (
              <Icon name="bars" size={27} color="#fff" style={{marginLeft:16}}
                onPress={()=> navigation.openDrawer()}/>
            )
          }),
        },
  },{
  defaultNavigationOptions:{
    headerTintColor:'#fff',
    //ヘッダーのスタイル
    headerBackTitle:null,
    headerStyle:{
      backgroundColor:'#333366',
    },
    //ヘッダータイトルのスタイル
    headerTitleStyle:{
      color:'#fff',
    },
  }
});

const App = createDrawerNavigator({
  Home:{screen: HomeStack},
},{
  contentComponent: props => <SideBar {...props}/>
});

export default createAppContainer(App);
