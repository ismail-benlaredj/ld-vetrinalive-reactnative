import {
  Text,
  View,
  VStack,
  Input,
  ScrollView,
  Icon,
  Checkbox,
  Stack,
  Radio,
} from "native-base";
import * as React from "react";
import { useWindowDimensions, StyleSheet } from "react-native";
import {
  TabView,
  SceneMap,
  TabBar,
  SceneRendererProps,
  NavigationState,
} from "react-native-tab-view";
import palette from "../theme/palette";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import PriceIcon from "../assets/icons/products/newProductPage/price.svg";
import SelectCategoryIcon from "../assets/icons/products/newProductPage/selectCategory.svg";
import WeightIcon from "../assets/icons/products/newProductPage/weight.svg";
import AvailabilityIcon from "../assets/icons/products/newProductPage/availability.svg";

const primaryColor = "#21B8F9";
const paperBackground = "#F8F9FB";

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#cccccc", padding: 20 }}>
    <Text>Variants available soon !</Text>
  </View>
);

const FirstRoute = () => {
  let richText = React.useRef<any>();
  const [groupValues, setGroupValues] = React.useState([]);
  const richTextHandle = (descriptionText: any) => {
    console.log(descriptionText);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: paperBackground }}>
      {/* GA section */}
      <Section sectionTitle={"General Information"}>
        <VStack space={2}>
          <FieldLabel>Product Name</FieldLabel>
          <Input placeholder="Product name" />
        </VStack>
        <FieldLabel>Description</FieldLabel>
        <ScrollView>
          <View
            style={{
              borderColor: "rgba(10, 37, 64, 0.32);",
              borderWidth: 1,
              padding: 2,
              borderRadius: 10,
              minHeight: 200,
            }}
          >
            <RichToolbar
              editor={richText}
              selectedIconTint="#873c1e"
              iconTint="#312921"
              actions={[
                actions.setBold,
                actions.setItalic,
                actions.setStrikethrough,
                actions.setUnderline,
                actions.insertBulletsList,
                actions.insertLink,
              ]}
            />
            <RichEditor
              ref={richText}
              onChange={richTextHandle}
              placeholder={"Description ( 0/5000 )"}
              containerStyle={{
                flex: 1,
                padding: 10,
              }}
              useContainer={false}
            />
          </View>
        </ScrollView>
      </Section>
      {/* Price section */}
      <Section sectionTitle="Price">
        <VStack space={2}>
          <FieldLabel>Original Price</FieldLabel>
          <Input
            placeholder="Original price"
            InputLeftElement={<Icon as={PriceIcon} ml={2} />}
          />
        </VStack>
        <VStack space={2}>
          <FieldLabel>Discounted Price</FieldLabel>
          <Input
            placeholder="Discounted Price"
            isDisabled={true}
            InputLeftElement={<Icon as={PriceIcon} ml={2} />}
          />
        </VStack>
        <Checkbox.Group
          onChange={setGroupValues}
          value={groupValues}
          accessibilityLabel="activate discount"
        >
          <Checkbox value="one" my={2}>
            <Text color={"primaryText"}>Activate Discounted Price</Text>
          </Checkbox>
        </Checkbox.Group>
      </Section>
      {/* Details section */}
      <Section sectionTitle="Details">
        <VStack space={2}>
          <FieldLabel>Category</FieldLabel>
          <Input
            placeholder="Select Category"
            InputRightElement={
              <Icon as={SelectCategoryIcon} size={"4xl"} mr={3} />
            }
          />
        </VStack>
        <VStack space={2}>
          <FieldLabel>Product Code / SKU</FieldLabel>
          <Input
            placeholder="Leave empty to automatically generate"
            // InputRightElement={<Icon as={SelectCategory} size={"4xl"} mr={3} />}
          />
        </VStack>
        <VStack space={2}>
          <FieldLabel>Weight</FieldLabel>
          <Input
            placeholder="0 g"
            InputLeftElement={<Icon as={WeightIcon} ml={3} />}
          />
        </VStack>
        <VStack space={2}>
          <FieldLabel>Availability</FieldLabel>
          <Input
            placeholder="0"
            InputLeftElement={<Icon as={AvailabilityIcon} marginLeft={3} />}
          />
        </VStack>
        <Checkbox.Group onChange={setGroupValues} value={groupValues}>
          <Checkbox value="one" my={2}>
            <Text color={"primaryText"}>This is a featured product</Text>
          </Checkbox>
        </Checkbox.Group>
      </Section>
      {/* Type section */}
      <Section sectionTitle="Product Type">
        <Radio.Group defaultValue="1" name="productType">
          <Stack direction={"row"} space={12}>
            <Radio value="1" colorScheme="blue">
              <Text>Physical</Text>
            </Radio>
            <Radio value="2" colorScheme="blue">
              <Text>Digital</Text>
            </Radio>
          </Stack>
        </Radio.Group>
      </Section>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  info: FirstRoute,
  variants: SecondRoute,
});

const renderTabBar = (
  props: SceneRendererProps & {
    navigationState: NavigationState<{
      key: string;
      title: string;
    }>;
  }
) => (
  <TabBar
    {...props}
    style={{ backgroundColor: "white" }}
    activeColor={primaryColor}
    inactiveColor="#103B66"
    renderLabel={({ route, color }) => (
      <Text style={{ color, fontWeight: "bold" }}>{route.title}</Text>
    )}
    indicatorStyle={{ backgroundColor: primaryColor }}
  />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "info", title: "info" },
    { key: "variants", title: "variants" },
  ]);

  return (
    <TabView
      style={{ marginTop: 20 }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}

const Section = ({
  children,
  sectionTitle,
}: {
  children?: React.ReactNode;
  sectionTitle: string;
}) => {
  return (
    <VStack style={styles.section} my={6} rounded="sm" mx={0.5} space={6}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      {children}
    </VStack>
  );
};

const FieldLabel = ({ children }: { children: React.ReactNode | string }) => {
  return <Text style={styles.sectionFieldLabel}>{children}</Text>;
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 20,
    color: palette.colors.primaryText,
  },
  sectionFieldLabel: {
    fontWeight: "600",
    fontSize: 15,
    color: palette.colors.disabledText,
  },
  richTextEditorStyle: {
    backgroundColor: "green",
    display: "flex",
    flex: 1,
  },
});
