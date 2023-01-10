import React, { useState } from 'react'
import {
    View,
    VStack,
    Text,
    HStack,
    Center,
    Button,
    Icon,
    Box,
    Flex,
    Switch
} from "native-base";
import { ScrollView, StyleSheet } from 'react-native'


export default function Subscription() {
    const [isEnabled, setIsEnabled] = useState(true);
    return (
        <ScrollView>
            <View px={25}>
                <VStack py={10}>
                    <Center mb={60}>
                        <Text variant='headTwo' color="primaryText" bold mb={8}>
                            Choose your plan
                        </Text>
                        <HStack space={5} ml={16}>

                            <Text fontWeight="semibold" color={isEnabled ? "secondaryText" : "primaryText"}>Monthly</Text>
                            <Flex
                                w={55} h={7}
                                rounded='full'
                                justifyContent='center' alignContent='flex-end'
                                py={3} pr={0.4}
                                bg={isEnabled ? "primary" : "secondaryText"}
                            >
                                <Switch
                                    defaultIsChecked
                                    isChecked={isEnabled}
                                    onToggle={() => setIsEnabled(!isEnabled)}
                                    offTrackColor="secondaryText"
                                    onTrackColor="primary"
                                    onThumbColor="#fff"
                                    size="lg" />
                            </Flex>
                            <Text fontWeight="semibold" color={!isEnabled ? "secondaryText" : "primaryText"}>Yearly</Text>
                            <Box bg="success" px="10px" py='2px' rounded='sm'>
                                <Text color="#fff" fontSize={12}>Promo</Text>
                            </Box>
                        </HStack>
                    </Center>


                    {plans.map((plan) => (
                        <PlanCard
                            isEnabled={isEnabled}
                            key={plan.id}
                            title={plan.title}
                            pricePerYear={plan.pricePerYear}
                            pricePerMonth={plan.pricePerMonth}
                            features={plan.features}
                            additions={plan.additions}
                        />
                    ))}

                </VStack>

            </View>

        </ScrollView>
    )
}

type planCardProp = {
    isEnabled: boolean;
    title: string;
    pricePerYear: string;
    pricePerMonth: string;
    features: string;
    additions: string | null;

}

const PlanCard = ({ isEnabled, title, pricePerYear, pricePerMonth, features, additions }: planCardProp) => {
    return (
        <View shadow={2} style={styles.cardContainer}>
            <Box style={styles.boxRow}>
                <Box style={styles.boxCol} >
                    <Box>
                        <Text fontSize={20} bold>{title}</Text>
                        <Text fontSize={12} color="success" bold>{additions}</Text>
                    </Box>
                    <HStack>
                        <Text fontSize={15} bold>€</Text>
                        <Text color="primary" variant={"number"} bold>
                            {isEnabled ? pricePerYear : pricePerMonth}
                        </Text>
                        <Text fontSize={15} bold>/ {isEnabled ? "year" : "month"}</Text>
                    </HStack>
                </Box>
                <Box style={styles.boxCol} alignItems='flex-end' >
                    <Text fontSize={15} bold>{features}</Text>
                    <Button variant='contained' style={styles.btn} mt={5}>
                        Change plan
                    </Button>
                </Box>
            </Box>
        </View>
    )
}

const plans = [
    {
        id: "1",
        title: "Free",
        pricePerYear: "0.00",
        pricePerMonth: "0.00",
        features: "Max 150 prodotti",
        additions: null

    },
    {
        id: "1sd",
        title: "Vetrina",
        pricePerYear: "109.00",
        pricePerMonth: "10",
        features: "Max 150 prodotti",
        additions: "2 mesi in regalo"

    },
    {
        id: "1x",
        title: "Negozio",
        pricePerYear: "209",
        pricePerMonth: "20",
        features: "Max 150 prodotti",
        additions: "2 mesi in regalo"

    },
    {
        id: "15",
        title: "Vetrina",
        pricePerYear: "399.00",
        pricePerMonth: "40",
        features: "Max 150 prodotti",
        additions: "2 mesi in regalo"

    }
]

const styles = StyleSheet.create({
    cardContainer: {
        position: 'relative',
        marginTop: 16,
        height: 125,
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 10,
    },
    boxCol: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between'

    },
    boxRow: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    btn: {
        maxWidth: 118,
        maxHeight: 46,
    }

})