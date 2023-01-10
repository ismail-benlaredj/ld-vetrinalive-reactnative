import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { HStack, Heading, Divider, VStack, Button, Image } from "native-base";
import HamburgerMenuIcon from "../assets/icons/products/Menu.svg";
import paymentsList from "../components/paymentsList";
import { FlatList } from "react-native-gesture-handler";

const Payments = () => {
  const comingSoonColor = "#6979F8";
  const disabledGreyColor = "#7D8A99";
  const disabledGreenColor = "#00C48C";

  return (
    <ScrollView>
      <HStack style={styles.topbar} p={3} justifyContent={"space-between"}>
        <HStack alignItems={"center"} space={3}>
          <HamburgerMenuIcon />
          <Heading color="primaryText" size={"md"}>
            Payment
          </Heading>
        </HStack>
      </HStack>
      <Divider thickness={2} />
      <ScrollView style={styles.main}>
        <Text style={styles.header}>Payment methods</Text>
        <FlatList
          data={paymentsList}
          renderItem={({ item }) => {
            return (
              <PaymentCard
                image={item.image}
                cardText={item.cardText}
                btnText={item.btnText}
                btnTextColor={item.btnTextColor}
                btnBgColor={item.btnBgColor}
              />
            );
          }}
        />
      </ScrollView>
    </ScrollView>
  );
};

export default Payments;

const PaymentCard = ({
  image,
  cardText,
  btnText,
  btnTextColor,
  btnBgColor,
}: any) => {
  return (
    <View style={styles.paymentCard}>
      <VStack
        flex={1}
        justifyContent="space-between"
      >
        <Image source={image} alt="company_logo" />
        <Text>{cardText}</Text>
      </VStack>
      <VStack>
        <Button
          size="md"
          style={{
            backgroundColor: btnBgColor,
          }}
          _text={{
            color: btnTextColor,
          }}
        >
          {btnText}
        </Button>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: "white",
  },
  header: {
    fontWeight: "600",
    fontSize: 22,
    lineHeight: 32,
    color: "#103B66",
    marginTop: 22,
    marginBottom: 24,
  },
  main: {
    padding: 16,
    backgroundColor: "paperBackground",
  },
  paymentCard: {
    height: 140,
    elevation: 3,
    borderRadius: 5,
    backgroundColor: "white",
    flexDirection: "row",
    padding: 16,
    marginBottom : 16
  },
});
