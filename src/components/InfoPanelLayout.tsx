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


export default function InfoPanelLayout({ children, title }: any) {
    return (
        <View my={4}>
            <Text
                fontSize={17}
                bold
                lineHeight={22}
                color="disabledText"
                mb={4}
            >
                {title}
            </Text>
            <VStack space={3} mb={5}>
                {children}
            </VStack>
            <Divider bg="grayLight" thickness={2} />
        </View>
    )
}