import { StyleSheet } from "react-native";
import React from "react";
import {
  View,
  Button,
  Text,
  Heading,
  HStack,
  Switch,
  VStack,
  FlatList,
  ScrollView,
  Icon,
} from "native-base";
import PlusButton from "../assets/icons/products/PlusButton.svg";
import MoreHorizontal from "../assets/icons/products/moreHorizontal.svg";
import Product from "../assets/icons/products/Product.svg";
import ArrowDown from "../assets/icons/products/arrowDown.svg";
import ArrowLeft from "../assets/icons/products/arrowLeft.svg";
import ArrowRight from "../assets/icons/products/arrowRight.svg";
import { Alert } from "native-base";
import ProductHeadLine from "../components/ProductHeadLine";

const Products = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.outer}
      bgColor={"paperBackground"}
    >
      {/* Topbar */}
      <ProductHeadLine />
      {/* summary section + New Products button */}
      <View p={3}>
        <HStack justifyContent={"space-between"} alignItems={"center"} mb={4}>
          <VStack space={2}>
            <Text>Products ( 24 / 100 )</Text>
            <Text>Featured products (7/10)</Text>
            <Switch mr="auto" />
          </VStack>
          <Button
            height={"48px"}
            width={"48px"}
            bgColor="primary"
            color="white"
            onPress={() => Alert}
          >
            <Icon as={PlusButton} size="1" />
          </Button>
        </HStack>
        {/* Grid of products */}
        <Grid />
      </View>
    </ScrollView>
  );
};

export default Products;

const Grid = () => {
  const DATA = [
    { name: "T-shirt", price: 4200 },
    { name: "Shorts", price: 2500 },
    { name: "Jeans", price: 6500 },
    { name: "Socks", price: 220 },
    { name: "Air Jordans", price: 24000 },
    { name: "Chinos", price: 5000 },
    { name: "Blazer", price: 18000 },
  ];

  return (
    <ScrollView>
      {/* First the table head */}
      <HStack alignItems={"center"}>
        <View flex={6} style={styles.tableCell}>
          <Heading size={"sm"} color="darkerPrimaryText">
            Product name
          </Heading>
        </View>
        <View flex={2} style={styles.tableCell}>
          <Heading size={"sm"} color="darkerPrimaryText">
            Price
          </Heading>
        </View>
        <View flex={1} style={{ ...styles.tableCell, padding: 11 }}>
          <Icon as={MoreHorizontal} />
        </View>
      </HStack>
      {/* then the items */}
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <HStack alignItems={"center"}>
            <HStack
              flex={6}
              space={4}
              style={styles.tableCell}
              alignItems="center"
            >
              <Icon as={Product} />
              <Text>{item.name}</Text>
            </HStack>
            <VStack
              flex={2}
              style={{
                ...styles.tableCell,
                alignSelf: "stretch",
                justifyContent: "center",
              }}
            >
              <Text>{item.price}</Text>
            </VStack>
            <View
              flex={1}
              style={{
                ...styles.tableCell,
                padding: 11,
                alignSelf: "stretch",
                justifyContent: "center",
              }}
            >
              <Icon as={MoreHorizontal} />
            </View>
          </HStack>
        )}
      />
      {/* last goes the footer */}
      <HStack space={12} px={5} py={4} style={{ ...styles.tableCell }}>
        <HStack alignItems={"center"}>
          <Text mr={2}>P 25</Text>
          <Icon as={ArrowDown} />
        </HStack>
        <Text>1-25 of 25</Text>
        <HStack alignItems={"center"} space={3}>
          <Icon as={ArrowLeft} />
          <Icon as={ArrowRight} />
        </HStack>
      </HStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: "white",
  },
  outer: {
    flex: 1,
  },
  tableCell: {
    borderWidth: 1,
    borderColor: "#E7E9EC",
    padding: 13,
  },
});
