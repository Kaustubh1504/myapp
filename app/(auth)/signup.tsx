import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const SignUpPage = () => {
  return (
    <View>
      <Text>signup Page</Text>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/getstarted",
          })
        }
      >
        <Text>getstarted</Text>
      </Pressable>
    </View>
  );
};

export default SignUpPage;