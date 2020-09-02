import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Search from "./src/screens/Search";
import ResultsShow from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: Search,
    ResultsShow: ResultsShow,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
