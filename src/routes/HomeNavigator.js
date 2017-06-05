import { TabNavigator } from "react-navigation";
import Colors from "../../constants/Colors";

import { HomeScreen, ForecastScreen } from "../screens";

export default TabNavigator({
        Home: {
            screen: HomeScreen
        },
        ForecastScreen: {
            screen: ForecastScreen
        },
    },
    {
        swipeEnabled: true,
        animationEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            inactiveTintColor: Colors.blackBlueColor,
            activeTintColor: Colors.redColor,
            pressColor: Colors.redColor,
            indicatorStyle: {backgroundColor: Colors.redColor},
            style: {
                backgroundColor: Colors.whiteColor
            }
        }
    });