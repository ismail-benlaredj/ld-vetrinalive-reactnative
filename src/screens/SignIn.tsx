import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  Button,
  VStack,
  Heading,
  Text,
  Input,
  Stack,
  HStack,
  Divider,
  Icon,
} from "native-base";
import { SafeAreaView, ScrollView, View } from "react-native";

import FacebookLogo from "assets/icons/facebookLogo.svg";
import GoogleLogo from "assets/icons/googleLogo.svg";
import Logo from "../assets/icons/Logo.svg";
import HeadphonesIcon from "../assets/icons/headphones.svg";
import { login } from "../data/mockUsers";

type SignInProps = {
  navigation: any;
};
export default function SignIn({ navigation }: SignInProps) {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  console.log("email : ", email, " password : ", password);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Logo />
          <VStack space={2} width="3/4" style={styles.heading}>
            <Heading variant="heading" size="xl" color="primaryText">
              Welcome
            </Heading>
            <Text color="secondaryText" textAlign="center" fontSize={18}>
              Enter your email and password to access your account
            </Text>
          </VStack>
          <Stack space={3} width="345px" mx="auto" mb={4}>
            <Input
              size="xl"
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Input
              size="xl"
              placeholder="password"
              type="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Button
              variant={"contained"}
              size="lg"
              mt={5}
              onPress={() => {
                if (login(email, password)) {
                  navigation.navigate("Dashboard");
                }
              }}
            >
              Login
            </Button>
            <Separator />
            <VStack mt={2} space={3}>
              <Button variant="outlined" leftIcon={<FacebookLogo />}>
                Sign in with Facebook
              </Button>
              <Button variant="outlined" leftIcon={<GoogleLogo />}>
                Sign in with Google
              </Button>
            </VStack>
          </Stack>
          <VStack style={styles.textCenter}>
            <Text color="primaryText" fontSize={18}>
              Did you forget your password?
            </Text>
            <HStack mt={4}>
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

export const Separator = () => {
  return (
    <HStack direction="row" space={4} width="345px" style={styles.separator}>
      <Divider
        width={148}
        _light={{
          bg: "muted.900",
        }}
      />
      <Text color="secondaryText" fontSize={14} bold>
        or
      </Text>
      <Divider
        width={148}
        _light={{
          bg: "muted.900",
        }}
      />
    </HStack>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 22.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
