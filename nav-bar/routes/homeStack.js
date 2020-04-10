// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from '../screens/home';
// import ReviewDetails from '../screens/reviewDetails';
// const screens={
//     Home:{
//         screen:Home
//     },
//     ReviewDetails:{
//         screen:ReviewDetails
//     }
// }

// const HomeStack=createStackNavigator(screens)
// export default  NavigationContainer(HomeStack);

import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation'
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
const screens={
    Home:{
        screen: Home,
       navigationOptions:{
           title:"homepage",
            headerStyle:{backgroundColor:'pink'}
        }
    },
    ReviewDetails:{
        screen: ReviewDetails
    }
}
const HomeStack=createStackNavigator(screens,{defaultNavigationOptions:{
    headerTintColor:'yellow',
    headerStyle:{backgroundColor:'blue'}
}})

export default HomeStack;
// export default createAppContainer(HomeStack)