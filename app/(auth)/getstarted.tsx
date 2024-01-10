import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useAuth } from "../../context/AuthProvider";


const GetstartedPage = () => {

const { setUser } = useAuth();
const login = () => {
    setUser({
    name: "Kyle Lloyd",
    });
}

  return (
    <View>
      <Text>Getstarted Page</Text>
      <Pressable
        onPress={login}
      >
        <Text>Home page</Text>
      </Pressable>
    </View>
  );
};

export default GetstartedPage;