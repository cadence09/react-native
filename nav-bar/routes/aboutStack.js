import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation'
import Home from '../screens/home';

import About from '../screens/about';
const screens={
    About:{
        screen: About,
       navigationOptions:{
           title:"About",
            headerStyle:{backgroundColor:'pink'}
        }
    },
 
}
const AboutStack=createStackNavigator(screens,{defaultNavigationOptions:{
    headerTintColor:'yellow',
    headerStyle:{backgroundColor:'blue'}
}})

export default AboutStack;
// export default createAppContainer(HomeStack)