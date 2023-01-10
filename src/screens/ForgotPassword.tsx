import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import {
  Button,
  VStack,
  Heading,
  Text,
  Input,
  Stack,
  HStack,
  Icon,
} from "native-base";
import { SafeAreaView, ScrollView, View } from "react-native";

import Logo from "../assets/icons/Logo.svg";
import HeadphonesIcon from "../assets/icons/headphones.svg";
import { login } from "../data/mockUsers";

type SignInProps = {
  navigation: any;
};
export default function SignIn({ navigation }: SignInProps) {
  const [email, setEmail] = React.useState("");

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Logo />
          <VStack space={2} style={styles.heading}>
            <Heading variant="heading" size="xl" color="primaryText">
              Forgot Password
            </Heading>
            <Text color="secondaryText" textAlign="center" fontSize={18}>
              Enter your email and you will receive an email to recover your
              password
            </Text>
          </VStack>
          <Stack space={3} width="345px" mx="auto" mb={4}>
            <Input
              size="xl"
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Button
              variant={"contained"}
              size="lg"
              mt={5}
              onPress={() => {
                // go back to login page
              }}
            >
              Login
            </Button>
          </Stack>
          <VStack style={styles.textCenter}>
            <HStack mt={4} mb={10}>
              <Text color="primaryText" fontSize={18}>
                Do not have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Sign up");
                }}
              >
                <Text ml={1} color="primary" fontSize={18}>
                  Register now
                </Text>
              </TouchableOpacity>
            </HStack>
            <Button
              rounded="full"
              variant="outlined"
              borderColor="success"
              px={6}
              my={5}
              size="lg"
              _icon={{ marginRight: 3 }}
              leftIcon={<Icon as={HeadphonesIcon} size="1" />}
            >
              <Text bold color={"primaryText"}>
                Support
              </Text>
            </Button>
          </VStack>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 22.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    height: Dimensions.get("window").height,
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 24,
  },
  separator: {
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: 127.5,
  },
  textCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
