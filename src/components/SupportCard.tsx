import React from 'react'
import { VStack, HStack, Text, Icon, Avatar, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import Headphones from 'assets/icons/headphones.svg';

export default function SupportCard() {
    return (
        <VStack space={6} style={styles.container} bg="#fff" my={6}>
            <HStack mb={5}>
                <Icon as={Headphones} />
                <Text variant="headTwo" ml={6}>
                    Customer support
                </Text>
            </HStack>
            <HStack space={4} alignItems="center">
                <Avatar
                    bg="gray.500"
                    alignSelf="center"
                    size="40px"
                    source={require('assets/images/supportAvatar.png')}
                />
                <Text fontSize={20}>Simone is here to help you</Text>
            </HStack>
            <Button variant="contained" alignSelf="center" px={4}>
                Contact us
            </Button>
        </VStack>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderRadius: 10,
        boxShadow: "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)"
    }
})