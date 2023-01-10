import React from 'react'
import { StyleSheet } from 'react-native';
import {
    Center,
    Text,
    VStack,
    ScrollView,
    HStack,
    Icon,
} from 'native-base';
import CardLayout from './CardLayout'

import ExtensionsIcon from '../assets/icons/extensionsIcon.svg';
import DomainIcon from '../assets/icons/domainIcon.svg';

export default function ExtensionsCard() {
    return (
        <CardLayout
            title="Extensions Marketplace"
            IconProp={ExtensionsIcon}
            linkText="Discover all extensions"
            linkColor='primary'
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <HStack space={4}>
                    <ExtensionBox title="Custom Domain" bg="warning">
                        <Icon as={DomainIcon} />
                    </ExtensionBox>
                    <ExtensionBox title="+50 Products" bg="success">
                        <Text
                            variant="headOne"
                            color="#fff"
                        >
                            +50
                        </Text>
                        <Text
                            fontSize={22}
                            color="#fff"
                        >
                            Prodotti
                        </Text>
                    </ExtensionBox>
                    <ExtensionBox title="+50 Products" bg="success">
                        <Text
                            variant="headOne"
                            color="#fff"
                        >
                            +50
                        </Text>
                        <Text
                            fontSize={22}
                            color="#fff"
                        >
                            Prodotti
                        </Text>
                    </ExtensionBox>
                </HStack>
            </ScrollView>
        </CardLayout>
    )
}

type ExtensionProps = {
    children: React.ReactNode | React.ReactNode[];
    title: string;
    bg: string;

};
const ExtensionBox = ({ title, bg, children }: ExtensionProps) => {
    return (
        <VStack space={3}>
            <Center bg={bg} shadow={2} style={styles.container}>
                {children}
            </Center>
            <Text>{title}</Text>
        </VStack>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 180,
        width: 180,

    },
});