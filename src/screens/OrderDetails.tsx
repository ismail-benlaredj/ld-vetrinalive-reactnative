import React from 'react'
import {
    View,
    VStack,
    Text,
    HStack,
    Pressable,
    Divider
} from "native-base";
import { StyleSheet } from 'react-native';
import OrderDetailsTab from '../navigators/OrderDetailsTab'

import StarFilledIcon from 'assets/icons/starFilledIcon.svg';
import CloseIcon from 'assets/icons/closeIcon.svg';

export default function OrderDetails({ navigation }: any) {
    return (
        <View style={styles.container} px={4}>
            <OrderDetailsHeader navigation={navigation} />
            <OrderDetailsTab />
        </View>
    )
}


const OrderDetailsHeader = ({ navigation }: any) => {
    return (
        <VStack style={styles.header} space={6}>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
                <Text>Orders:#1292</Text>
                <HStack space={3}>
                    <HStack space={2}>
                        <StarFilledIcon />
                        <Text color='primary'>Stampa ordine</Text>
                    </HStack>
                    <Pressable onPress={() => navigation.navigate('orders')}>
                        <CloseIcon />
                    </Pressable>
                </HStack>
            </HStack>
            <Divider bg="grayLight" thickness={2} />
        </VStack>
    )
}



const styles = StyleSheet.create({
    header: {
        paddingVertical: 25

    },
    container: {
        flex: 1,
        background: 'white'
    }

})