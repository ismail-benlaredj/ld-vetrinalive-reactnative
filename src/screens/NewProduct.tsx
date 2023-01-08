import React from "react";
import { StyleSheet } from "react-native";
import { Icon, Text, View, Button, VStack } from "native-base";
import ProductHeadLine from "../components/ProductHeadLine";
import backChevron from "../assets/icons/products/newProductPage/backChevron.svg";
import TabViewExample from "../components/NewProductTabView";

const NewProduct = () => {
  return (
    <VStack flex={1}>
      <ProductHeadLine />
      <VStack p={4} backgroundColor="paperBackground" flex={1}>
        <Button
          rounded="full"
          variant="outlined"
          borderColor="primary"
          my={2}
          size="sm"
          _icon={{ marginRight: 3 }}
          leftIcon={<Icon as={backChevron} size="1" />}
          width="150px"
        >
          <Text bold color={"primaryText"}>
            All products
          </Text>
        </Button>
        <Text style={styles.newProduct}>New Product</Text>
        <TabViewExample />
      </VStack>
    </VStack>
  );
};

export default NewProduct;

const styles = StyleSheet.create({
  newProduct: {
    fontWeight: "600",
    fontSize: 28,
    lineHeight: 32,
    color: "#103B66",
    marginTop: 22,
  },
});
