import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import AddTask from "./screens/AddTask";
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="AddTaskScreen"
        component={AddTask}
        options={{ headerShown: false, headerTransparent: true }}
      />
    </Stack.Navigator>
  );
};
export default MainStack;
