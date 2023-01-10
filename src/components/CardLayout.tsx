import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { VStack, HStack, Text, Icon } from 'native-base';

import arrowRightIcon from '../assets/icons/arrowRightIcon.svg';

interface Props {
    children?: React.ReactElement | React.ReactElement[]
    link?: string
    linkText: string
    width?: number
    title?: string
    IconProp: any
    bg?: string
    linkColor?: string
}
export default function CardLayout({ title, IconProp, children, linkText, linkColor, bg = "#fff" }: Props) {
    return (
        <VStack style={styles.container} mb={6} bg={bg} >
            <HStack mb={5}>
                <Icon as={IconProp} />
                <Text variant="headTwo" ml={6}>
                    {title}
                </Text>
            </HStack>

            {children}

            <HStack mt={5}>
                <TouchableOpacity>
                    <Text style={styles.textDeco} variant="link" color={linkColor}>
                        {linkText}
                    </Text>
                </TouchableOpacity>
                <Icon as={arrowRightIcon} color={linkColor} ml={6} />

            </HStack>
        </VStack >
    )
}


export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderRadius: 10,
        boxShadow: "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)"
    },
    textDeco: {
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "secondaryText"
    }

})