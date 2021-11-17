import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
//Pages

import Detail from "./pages/Details";
import Incidents from "./pages/Incidents";

function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Incidents" component={Incidents} />
      <Stack.Screen name="Details" component={Detail} />
    </Stack.Navigator>
  );
}

export default Routes;
