import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
// Screens
import Dashboard from '../screens/Dashboard';
import Landing from '../screens/Landing';
import Challenges from '../screens/Challenges';
import Upcoming from '../screens/Upcoming';
import ItemShop from '../screens/ItemShop';
import Stats from '../screens/Stats';
import Compare from '../screens/Compare';
import Giveaway from '../screens/Giveaway';
import About from '../screens/About';
import Privacy from '../screens/Privacy';

const AppNavigator = createStackNavigator(
    {
        Dashboard: { screen: Dashboard },
        Landing: { screen: Landing },
        Challenges: { screen: Challenges },
        Upcoming: { screen: Upcoming },
        ItemShop: { screen: ItemShop },
        Stats: { screen: Stats },
        Compare: { screen: Compare },
        Giveaway: { screen: Giveaway },
        About: { screen: About },
        Privacy: { screen: Privacy }
    },
    {
        initialRouteName: 'Dashboard'
    });

export default createAppContainer(AppNavigator);