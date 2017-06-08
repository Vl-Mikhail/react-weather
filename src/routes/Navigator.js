import { StackNavigator } from "react-navigation";
import { ForecastScreen, HomeScreen } from "../screens";

export default StackNavigator({
    Home: {screen: HomeScreen},
    ForecastScreen: {screen: ForecastScreen},
});