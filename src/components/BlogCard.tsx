import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
    View,
    VStack,
    Text,
    Image,
    HStack,
    Icon,
    Center
} from "native-base";
import FileTtextIcon from '../assets/icons/fileTextIcon.svg'
import ExternalLinkIcon from '../assets/icons/externalLinkIcon.svg'
import { useFetch } from '../Hooks/useFetch';


const BLOG_API = 'https://api.vetrinalive.com/api/blog-posts'

export default function BlogCard() {
    const [data] = useFetch(BLOG_API);
    return (
        <VStack style={styles.Cardcontainer} mb={6}>
            <HStack mb={5}>
                <Icon as={FileTtextIcon} />
                <Text variant="headTwo" ml={6}>
                    Latest News
                </Text>
            </HStack>

            <VStack>
                {
                    data?.slice(0, 3).map((item: any) => (
                        <View key={item.id}>
                            <ArticleCard
                                title={item.title}
                                category={item.category}
                                readTime={item.read_time}
                                imgLink={item.image_url}
                            />
                        </View>
                    ))
                }
            </VStack>
            <Center>
                <HStack mt={5}>
                    <TouchableOpacity>
                        <Text variant="link" color="primary">
                            Visita il nostro Blog
                        </Text>
                    </TouchableOpacity>
                    <Icon as={ExternalLinkIcon} color='primary' ml={6} />

                </HStack>
            </Center>
        </VStack>
    )
}

interface ArticleCardProps {
    postLink?: string
    imgLink: string
    category: string
    title: string
    readTime: string
}
function ArticleCard({ title, category, readTime, imgLink }: ArticleCardProps) {
    return (
        <HStack shadow={3} mb={4} style={styles.container}>
            <Image
                source={{
                    uri: imgLink,
                }}
                alt="Article Text"
                width="90px"
                height="full"
            />
            <VStack px={3} py={2} flex={1}>
                <Text colorScheme="primary" fontSize={12} >
                    {category}
                </Text>
                <Text fontSize={15} noOfLines={2} w="5/6" bold>
                    {title}
                </Text>
                <Text fontSize={12} color='secondaryText' style={styles.textDeco}>{`Stima lettura: ${readTime} min`}</Text>
            </VStack>
        </HStack>
    )
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: 'white',
        overflow: 'hidden',
        height: 115
    },

    Cardcontainer: {
        position: 'relative',
        backgroundColor: '#fff',
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

});