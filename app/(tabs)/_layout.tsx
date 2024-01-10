import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",
        }} 
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerTitle: "cart",
          title: "cart",
        }} 
      />
      <Tabs.Screen
        name="trade"
        options={{
          headerTitle: "Trade",
          title: "Trade",
        }} 
      />
      <Tabs.Screen
        name="menu"
        options={{
          headerTitle: "menu",
          title: "menu",
        }} 
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "profile",
          title: "profile",
        }} 
      />
    
    </Tabs>
  );
};

export default TabsLayout;