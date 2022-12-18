import React from 'react'
import {
    View,
    Button,
    VStack,
    Heading,
    Text,
    Input,
    Stack,
    HStack,
    Center,
    Icon,
} from "native-base";
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import CardLayout from '../components/CardLayout'
import BlogCard from '../components/BlogCard'
import ExtensionsCard from '../components/ExtensionsCard'
import ReviewsCard from '../components/ReviewsCard'
import SupportCard from '../components/SupportCard'
import InviteCard from '../components/InviteCard'

import ExternalLinkIcon from '../assets/icons/externalLinkIcon.svg'
import ToolIcon from '../assets/icons/toolIcon.svg';
import EyeIcon from '../assets/icons/eyeIcon.svg';
import ListIcon from '../assets/icons/listIcon.svg';



export default function Dashboard() {
    return (
        <ScrollView>
            <VStack py={8} px={4} maxH={240} h={240}
                bg={{
                    linearGradient: {
                        colors: ['primary', 'transparent'],
                        start: [0, 0],
                        end: [0, 1.32],
                    }
                }}  >
                <Text variant='headOne' color="#fff" >
                    Welcome Mario!
                </Text>
                <TouchableOpacity>
                    <HStack mt={5}>
                        <Text color="#fff" variant='link' >app.vetrinalive.com/mario-store</Text>
                        <Icon as={ExternalLinkIcon} ml={4} color="white" />
                    </HStack>
                </TouchableOpacity>
            </VStack>
            <View py={1} px={4}>
                {/* CARD 1 */}
                <VStack mt={-24}>
                    <CardLayout
                        title="Configura la tua vetrina"
                        IconProp={ToolIcon}
                        linkText="Completa la configurazione!"
                        linkColor='primary'
                    >
                        <Center>
                            <Text variant="headOne" color='error' >
                                0
                            </Text>
                            <Text variant="headTwo" color='error' bold >
                                completato
                            </Text>

                            <Text variant="headTwo" color='secondaryText' textAlign='center' my={4}>
                                Completa tutti i step per ricevere maggiore visibilità e una vetrina  accattivante
                            </Text>
                        </Center>
                    </CardLayout>
                </VStack>
                {/* CARD 2 */}
                <CardLayout
                    title="Visitors"
                    IconProp={EyeIcon}
                    linkText="Vuoi ricevere più visite? Contattaci!"
                    linkColor='primary'
                >
                    <Center>
                        <Text variant="headOne" color='primaryText' >
                            0
                        </Text>
                    </Center>
                </CardLayout>

                {/* CARD 3 */}
                <CardLayout
                    title="Order"
                    IconProp={ListIcon}
                    linkText="10 free tips to increase your sales"
                    linkColor='primary'
                >
                    <VStack my={5}>
                        <HStack justifyContent='space-between' mb={4}>
                            <Text color='secondaryText' fontSize={20} >
                                Orders received:
                            </Text>
                            <Text color='primaryText' fontSize={20} bold>
                                0
                            </Text>
                        </HStack>
                        <HStack justifyContent='space-between'>
                            <Text color='secondaryText' fontSize={20} >
                                Earnings:
                            </Text>
                            <Text color='primaryText' fontSize={20} bold>
                                € 0,00
                            </Text>
                        </HStack>
                    </VStack>
                </CardLayout>

                {/* CARD 4 */}
                <BlogCard />

                {/* CARD 5 */}
                <ExtensionsCard />

                {/* CARD 6 */}

                <ReviewsCard />

                {/* CARD 7 */}

                <SupportCard />

                {/* CARD 8 */}
                <InviteCard />
            </View>

        </ScrollView >
    )
}


const styles = StyleSheet.create({

})