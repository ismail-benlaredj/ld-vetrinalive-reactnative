import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, HStack, Icon } from 'native-base';

import Orders from '../screens/Orders';

import MenuIcon from 'assets/icons/menuIcon.svg';
import SearchIcon from 'assets/icons/searchIcon.svg';
import FilterIcon from 'assets/icons/filterIcon.svg';

const Stack = createNativeStackNavigator();

export default function OrdersNavigation({ navigation }: any) {
    return (
        <Stack.Navigator initialRouteName="Orders">
            <Stack.Screen
                name="orders"
                component={Orders}
                options={{
                    headerTitle: () => <HeaderTitle title="Orders" />,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Icon as={MenuIcon} marginRight={4} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <HStack mr={4} space={8}>
                            <TouchableOpacity onPress={() => console.log('Search item')}>
                                <SearchIcon />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log('filter item')}>
                                <FilterIcon />
                            </TouchableOpacity>
                        </HStack>
                    ),
                }}
            />
            <Stack.Screen
                name="OrderDetails"
                component={Orders}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

const HeaderTitle = ({ title }: { title: string }) => {
    return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
    title: {
        lineHeight: 25,
        fontSize: 20,

    },
});
