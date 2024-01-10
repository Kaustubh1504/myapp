import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const HomePage = () => {
  return (
    <View>
      <Text>Home Page</Text>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/homeCards/sniperbot",
          })
        }
      >
        <Text>sniper bot</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/homeCards/copytrade",
          })
        }
      >
        <Text>copytrade</Text>

      </Pressable>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/homeCards/transfer",
          })
        }
      >
        <Text>Transfer</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/homeCards/monitor",
          })
        }
      >
        <Text>Monitor</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/homeCards/affiliate",
          })
        }
      >
        <Text>affiliate</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/homeCards/linkaccount",
          })
        }
      >
        <Text>linkaccount</Text>
      </Pressable>






      {/* <Link href="/users/1">Go to user 1</Link> */}
      {/* <Pressable
        onPress={() =>
          router.push({
            pathname: "/users/[id]",
            params: { id: 2 },
          })
        }
      >
        <Text>Go to user 2</Text>
      </Pressable> */}
    </View>
  );
};

export default HomePage;