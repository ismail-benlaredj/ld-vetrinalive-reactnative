import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, Heading, Divider } from "native-base";
import HamburgerMenuIcon from "../assets/icons/products/Menu.svg";
import Search from "../assets/icons/products/search.svg";
import Filter from "../assets/icons/products/Filter.svg";

const ProductHeadLine = () => {
  return (
    <View>
      <HStack style={styles.topbar} p={3} justifyContent={"space-between"}>
        <HStack alignItems={"center"} space={3}>
          <HamburgerMenuIcon />
          <Heading color="primaryText" size={"md"}>
            Products
          </Heading>
        </HStack>
        <HStack alignItems={"center"} space={6}>
          <Search />
          <Filter />
        </HStack>
      </HStack>
      <Divider thickness={2} />
    </View>
  );
};

export default ProductHeadLine;

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: "white",
  },
});
