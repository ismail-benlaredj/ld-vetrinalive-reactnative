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
    Divider,
    Actionsheet, useDisclose
} from "native-base";
import { ScrollView, StyleSheet } from 'react-native'
import InfoPanelLayout from './InfoPanelLayout'

import WhatsappIcon from 'assets/icons/whatsappIcon.svg';
import TelegramIcon from 'assets/icons/telegramIcon.svg';
import InfoIcon from 'assets/icons/infoIcon.svg';
import ChevronDownIcon from 'assets/icons/chevronDownIcon.svg';
import ChevronDownLightIcon from 'assets/icons/chevronDownLightIcon.svg';

export default function OrderDetailsInfo() {
    return (
        <ScrollView>
            <View mt={8}>
                <VStack>
                    <Text
                        fontSize={15}
                        lineHeight={20}
                        color="disabledText"
                    >
                        29/05/2020  18:54
                    </Text>
                    <InfoPanelClient />
                    <InfoPanelAddress />
                    <InfoPanelShipping />
                    <OrderTotalPrice />
                    <OrderStatusMenu />
                </VStack>
            </View>
        </ScrollView>
    )
}


const InfoPanelClient = () => (
    <InfoPanelLayout title={"Cliente"}>
        <CustomText>Mario Rossi</CustomText>
        <CustomText color='primary'>mariorossi@vetrinalive.it</CustomText>
        <HStack>
            <CustomText>Telefono:  </CustomText>
            <CustomText color='primary'>+39 3333232331</CustomText>
        </HStack>
        <CustomText>Codice Fiscale: RSSMAR22T33M123K </CustomText>

        <HStack space={2} alignItems="center">
            <WhatsappIcon />
            <CustomText color='success'>Contatta su Whatsapp</CustomText>
        </HStack>

        <HStack space={2} alignItems="center">
            <TelegramIcon />
            <CustomText color='success'>Contatta su Telegram</CustomText>
        </HStack>
    </InfoPanelLayout>
)

const InfoPanelAddress = () => (
    <InfoPanelLayout title={"Shipping Address"}>
        <CustomText>Via Roma, 59, Torre del Greco, NA, 80059</CustomText>
    </InfoPanelLayout>
)

const InfoPanelShipping = () => (
    <InfoPanelLayout title={"Shipping Info"}>
        <CustomText>Nome corriere: Fedex</CustomText>
        <CustomText>Numero/Link ordine: FR12342123 2314</CustomText>
        <HStack alignItems='center' space={2}>
            <InfoIcon />
            <CustomText>Spedizione Corriere</CustomText>
            <ChevronDownIcon />
        </HStack>
        <Text
            fontSize={13}
            lineHeight={16}
            color='disabledText'
        >
            Se cambi la modalità e i costi di consegna, ricordati di comunicarlo al cliente.
        </Text>
    </InfoPanelLayout>
)


const OrderTotalPrice = () => (
    <VStack space={4}>
        <HStack justifyContent='space-between'  >
            <Text variant='link'>Subtotal</Text>
            <Text variant='link'>€ 47,00</Text>
        </HStack>

        <HStack justifyContent='space-between'>
            <Text variant='link'>Courier Shipping</Text>
            <HStack space={2}>
                <Text variant='link'>€ 2,00</Text>
                <ChevronDownIcon />
            </HStack>
        </HStack>

        <HStack justifyContent='space-between'  >
            <Text variant='link' bold>Total</Text>
            <Text variant='link' bold>€ 49,00</Text>
        </HStack>
    </VStack>
)


const orderStatusList = [
    { label: 'New', value: 'New' },
    { label: 'Reso effettuato', value: 'Reso effettuato' },
    { label: 'In progress', value: 'In progress' },
    { label: 'Cancelled', value: 'Cancelled' },
    { label: 'Shipped', value: 'Shipped' },
]
const OrderStatusMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclose();
    const [status, setStatus] = React.useState('Shipped');


    return (
        <Box my={4}>
            <Button
                onPress={onOpen}
                height={"72px"}
                bg='darkPurple'
            >
                <HStack space={2} alignItems='center'>
                    <Text color='white'>{status}</Text>
                    <ChevronDownLightIcon />
                </HStack>
            </Button>

            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    {orderStatusList.map((item) => (
                        <Actionsheet.Item
                            key={item.label}
                            onPress={() => {
                                setStatus(item.value)
                                onClose()
                            }}
                        >
                            {item.value}
                        </Actionsheet.Item>
                    ))}


                </Actionsheet.Content>
            </Actionsheet>
        </Box>
    );
}

const CustomText = ({ children, color = 'primaryText' }: any) => (
    <Text
        fontSize={15}
        lineHeight={20}
        color={color}
    >
        {children}
    </Text>
)