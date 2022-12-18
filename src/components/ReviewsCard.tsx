import React from 'react'
import CardLayout from '../components/CardLayout'
import {
    VStack,
    Text,
    Divider,
    Center,
} from "native-base";

import CapterraLogo from '../assets/icons/capterraLogo.svg'
import TrustpilotLogo from '../assets/icons/trustpilotLogo.svg'

export default function ReviewsCard() {
    return (
        <VStack bg='primaryText' py={6} borderRadius={10}>
            <CardLayout
                title=" "
                IconProp={CapterraLogo}
                linkText="Write a review on Capterra"
                linkColor="success"
                bg="primaryText"
            >
                <Text color="#fff" lineHeight={27}>
                    Write a{' '}
                    <Text color="success" bold>
                        positive
                    </Text>{' '}
                    review on Capterra and receive the extension with{' '}
                    <Text bold>
                        50 additional products.
                    </Text>
                </Text>
            </CardLayout>

            <Center>
                <Divider my="2" h={0.9} bg="#B6BEC6" w={"5/6"} />
            </Center>

            <CardLayout
                title=" "
                IconProp={TrustpilotLogo}
                linkText="Write a review on Trustpilot"
                linkColor="success"
                bg="primaryText"

            >
                <Text color="#fff" lineHeight={27}>
                    Show us your love by leaving a{' '}
                    <Text color="success" bold>
                        positive
                    </Text>{' '}
                    positive review on trust pilot and receive the extension of{' '}
                    <Text bold>
                        50 additional products
                    </Text>
                </Text>
            </CardLayout>
            <Text fontSize={12} color="#fff" mt={-6} pl={25}>
                * The two promotions are cumulative
            </Text>
        </VStack>
    )
}
