import React from 'react'

import { Button, View, StyleSheet } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text, Icon, Divider, HStack } from 'native-base';
import { drawerItemsList } from "./drawerItems"
import Dashboard from '../screens/Dashboard';


import Logo from 'assets/icons/Logo.svg';
import MenuIcon from 'assets/icons/menuIcon.svg';

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={props => <CustomDrawerContent {...props} />}
            >
                {drawerItemsList.map(item => (
                    <Drawer.Screen key={item.id} name={item.label} component={Dashboard}
                        options={{
                            drawerIcon: () => <Icon as={item.icon} />,
                            drawerLabel: () => <Text color="primaryText" bold>{item.label}</Text>
                        }}
                    />
                ))}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerHeader />
            <DrawerItemList {...props} />
            <Divider />
        </DrawerContentScrollView>
    );
}

function DrawerHeader() {
    return (
        <HStack style={styles.headerContainer} >
            <Logo width={'100'} />
            <MenuIcon />
        </HStack>
    )
}

function HomeScreen({ navigation }: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 22,
        paddingHorizontal: 16,
    }
})