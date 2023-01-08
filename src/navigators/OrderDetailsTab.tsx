import { Text, View, Pressable, Divider, VStack } from 'native-base';
import React from 'react';
import { useWindowDimensions, StyleSheet } from 'react-native';
import {
    TabView,
    TabBar,
    SceneMap,
    NavigationState,
    SceneRendererProps,
} from 'react-native-tab-view';

import OrderDetailsInfo from '../components/OrderDetailsInfo';

const OtherTabs = ({ route }: any) => (
    <Text
        fontSize={35} bold
        mt={6}
        lineHeight={35}
    >
        {route.title}
    </Text>
)



const renderScene = SceneMap({
    orderInfo: OrderDetailsInfo,
    products: OtherTabs,
    shipping: OtherTabs,
});

type State = NavigationState<{
    key: string;
    title: string;
}>;

export default function Tabs() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'orderInfo', title: 'Info order' },
        { key: 'products', title: 'Products' },
        { key: 'shipping', title: 'Shipping' },
    ]);

    const renderTabBar = (
        props: SceneRendererProps & { navigationState: State }
    ) => (
        <TabBar
            {...props}
            scrollEnabled
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            tabStyle={styles.tab}
            labelStyle={styles.label}
            renderLabel={({ route, focused }) => (
                <Text color={focused ? 'primary' : 'primaryText'} fontSize={12}>
                    {route.title}
                </Text>
            )}
        />
    );
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
            sceneContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabbar: {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
    },
    tab: {
        width: 120,
    },
    indicator: {
        backgroundColor: '#21B8F9',
    },
    label: {
        textTransform: 'capitalize',
    },
});
