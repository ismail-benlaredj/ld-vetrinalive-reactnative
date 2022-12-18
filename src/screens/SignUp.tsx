import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
    Button,
    VStack,
    Heading,
    Text,
    Input,
    Stack,
    HStack,
    Icon,
} from "native-base";
import {
    SafeAreaView,
    ScrollView,
    View
} from 'react-native'

import FacebookLogo from 'assets/icons/facebookLogo.svg';
import GoogleLogo from 'assets/icons/googleLogo.svg';
import Logo from '../assets/icons/Logo.svg';
import HeadphonesIcon from '../assets/icons/headphones.svg';

import { styles } from './SignIn';
import { Separator } from './SignIn';

type SignUpProps = {
    navigation: any
}
export default function SignUp({ navigation }: SignUpProps) {
    return (
        <SafeAreaView >

            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <View style={styles.container}>
                    <Logo />
                    <VStack space={2} width="100%" style={styles.heading}>
                        <Heading variant="heading" size='xl' color='primaryText'>
                            Create your e-commerce
                        </Heading>
                        <Text color="secondaryText" textAlign="center" fontSize={18}>
                            Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio online in pochi minuti. Nessuna carta di credito richiesta.
                        </Text>
                    </VStack>
                    <Stack space={3} width="345px" mx="auto" mb={4}>
                        <Input size="xl" placeholder="Name and Surname" />
                        <Input size="xl" placeholder="Email" />
                        <Input size="xl" placeholder="password" type="password" />
                        <Button variant={"contained"} size='lg' mt={5}>
                            Create your shop
                        </Button>
                        <Separator />
                        <VStack mt={2} space={3}>
                            <Button variant="outlined" leftIcon={<FacebookLogo />}>
                                Sign in with Facebook
                            </Button>
                            <Button variant="outlined" leftIcon={<GoogleLogo />}>
                                Sign in with Google
                            </Button>
                        </VStack>
                    </Stack>
                    <VStack style={styles.textCenter}>
                        <HStack mt={4}>
                            <Text color="primaryText" fontSize={18}>Do you have an account?</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Sign in');
                                }}>
                                <Text ml={1} color="primary" fontSize={18}>
                                    Sign in now
                                </Text>
                            </TouchableOpacity>
                        </HStack>
                        <Button
                            rounded="full"
                            variant="outlined"
                            borderColor="success"
                            px={6}
                            my={5}
                            size="lg"
                            _icon={{ marginRight: 3 }}
                            leftIcon={<Icon as={HeadphonesIcon} size="1" />}>
                            <Text bold color={"primaryText"}>Support</Text>

                        </Button>
                    </VStack>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

