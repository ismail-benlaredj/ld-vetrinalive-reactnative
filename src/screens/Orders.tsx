import React from 'react'
import {
    View,
    VStack,
    Text,
    HStack,
    Pressable,
    Button,
    Icon,
    Box,
    Checkbox,
    Divider
} from "native-base";
import { ScrollView, StyleSheet } from 'react-native'

import ExternalLinkIcon from 'assets/icons/externalLinkIcon.svg';
import TwoArrowsIcon from 'assets/icons/twoArrowsIcon.svg';
import MoreHorizontalIcon from 'assets/icons/moreHorizontalIcon.svg';

const statusBackgroundColor = (status: string) => {
    switch (status) {
        case 'shipped':
            return 'purple'
        case 'New':
            return 'primary'
        case 'Cancelled':
            return 'error'
        case 'In progress':
            return 'warning'
        case 'Reso effettc':
            return 'darkPurple'
        default:
            return 'gray'
    }
}


export default function Orders() {
    return (
        <ScrollView>
            <View px={4}>
                <VStack py={10} space={8}>
                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                        <Text>
                            Orders : <Text bold> 24</Text>
                        </Text>
                        <Button
                            space={2}
                            variant={'contained'}
                            endIcon={<Icon as={ExternalLinkIcon} color="grayDark" />}
                            isDisabled
                        >
                            Ship order
                        </Button>
                    </HStack >
                    <OrdersTable />
                </VStack >
            </View>
        </ScrollView>
    )
}


const OrdersTable = () => {
    return (
        <Box bg="white">
            <VStack divider={<Divider />}>
                <OrdersTableHeader />
                {ordersList.map((order) => (
                    <HStack
                        space={1}
                        divider={<Divider />}
                        key={order.title}
                    >
                        <HStack
                            space={2}
                            style={[styles.cell, styles.checkCell]}
                        >
                            <Checkbox
                                value="order"
                                accessibilityLabel="Checkbox for order"
                                colorScheme="blue"
                                size="md"
                            />
                            <Text fontSize={14}>{order.title}</Text>
                        </HStack>
                        <HStack style={[styles.cell, styles.nameCell]}>
                            <Text
                                width={'60%'}
                                fontSize={14}
                                lineHeight='16'
                                textTransform='capitalize'
                            >
                                {order.client}
                            </Text>
                        </HStack>
                        <HStack style={[styles.cell, styles.statoCell]}>
                            <Box style={styles.statusBox} bg={statusBackgroundColor(order.status)}>
                                <Text
                                    fontSize='12'
                                    noOfLines={1}
                                    color='white'
                                >
                                    {order.status}
                                </Text>
                            </Box>
                        </HStack>
                        <HStack style={styles.cell}>
                            <Pressable>
                                <MoreHorizontalIcon />
                            </Pressable>
                        </HStack>
                    </HStack>
                ))}
            </VStack>
        </Box>
    )
}


const OrdersTableHeader = () => {
    return (
        <HStack space={1} divider={<Divider />}>
            <HStack style={[styles.cell, styles.checkCell]}>
                <Checkbox
                    value="All"
                    accessibilityLabel="Checkbox for all orders"
                    colorScheme="blue"
                    size="sm"
                />
                <Text>#</Text>
                <TwoArrowsIcon />
            </HStack>
            <HStack space={2} style={[styles.cell, styles.nameCell]}>
                <Text bold>Name</Text>
                <TwoArrowsIcon />
            </HStack>
            <HStack space={2} style={[styles.cell, styles.statoCell]}>
                <Text bold>Stato</Text>
                <TwoArrowsIcon />
            </HStack>
            <HStack style={styles.cell}>
            </HStack>
        </HStack>
    )
}

const ordersList = [
    {
        id: 1,
        title: '4852',
        status: 'shipped',
        client: 'slim shady',
    },
    {
        id: 2,
        title: '4853',
        status: 'New',
        client: 'ricky bobby',
    },
    {
        id: 3,
        title: '4854',
        status: 'shipped',
        client: 'peter griffin',
    },
    {
        id: 4,
        title: '4855',
        status: 'Cancelled',
        client: 'brian griffin',
    },
    {
        id: 5,
        title: '4856',
        status: 'In progress',
        client: 'alex trebek',
    },
    {
        id: 6,
        title: '4857',
        status: 'Reso effettc',
        client: 'jimmy fallon',
    },
    {
        id: 7,
        title: '4858',
        status: 'shipped',
        client: 'nathan for you',
    },
    {
        id: 8,
        title: '4859',
        status: 'shipped',
        client: 'xavier woods',
    },
    {
        id: 9,
        title: '4860',
        status: 'shipped',
        client: 'michael jordan',
    },
    {
        id: 10,
        title: '4861',
        status: 'shipped',
        client: 'jordan peterson',
    },
    {
        id: 11,
        title: '4862',
        status: 'shipped',
        client: 'jordan peterson',
    },
]

const styles = StyleSheet.create({
    cell: {
        paddingHorizontal: 12,
        maxHeight: 56,
        minHeight: 56,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    checkCell: {
        maxWidth: 76,
        minWidth: 76,
    },
    nameCell: {
        minWidth: 138,
        maxWidth: 138,
    },
    statoCell: {
        maxWidth: 90,
        minWidth: 90,
    },
    lastCell: {
        maxWidth: 42,
        minWidth: 42,
    },
    statusBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 66,
        height: 32,
        lineHeight: 16,
        borderRadius: 4,

    }
})