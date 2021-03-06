import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
    Box,
    Heading,
    AspectRatio,
    Image,
    Text,
    HStack,
    Stack,
    Button,
} from "native-base";
import { useNavigation } from '@react-navigation/native';

const NewsScreen = (props) => {
    const navigation = useNavigation();

    return (
    <Box flex={1} bg="brand.900" alignItems="center" justifyContent="center">
            <ScrollView showsVerticalScrollIndicator={false}>
                {props.list.data.map((item) => {

                    return (
                        <Box key={'box1' + item.id}>
                    <Box width="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}
                         key={'box2' + item.id}
                    >
                            <Box
                                key={'box3' + item.id}
                            >
                                <AspectRatio w="100%" ratio={16 / 9}>
                                    <Image source={{
                                        uri: item.image
                                    }} alt="image" />
                                </AspectRatio>
                            </Box>
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Heading size="md" ml="-1">
                                        { item.title }
                                    </Heading>
                                </Stack>
                                <Text fontWeight="400">
                                    { item.short_description }
                                </Text>
                                <HStack alignItems="center" space={4} justifyContent="space-between">
                                    <HStack alignItems="center">
                                        <Text color="coolGray.600" _dark={{
                                            color: "warmGray.200"
                                        }} fontWeight="400">
                                            { item.created_at }
                                        </Text>
                                    </HStack>
                                </HStack>
                                <Stack mb="2.5" mt="1.5" direction={{
                                    base: "column",
                                    md: "row"
                                }} space={2} mx={{
                                    base: "auto",
                                    md: "0"
                                }}>
                                    <Button
                                        size="lg"
                                        colorScheme="blue"
                                        onPress={() => navigation.navigate('Article', {id: item.id})}
                                        variant="outline">
                                        ??????????????
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                            <Box
                                py="5"
                                key={'box4' + item.id}
                            />
                        </Box>
                );
                })}
            </ScrollView>
        </Box>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fc175c',
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: "bold"
    },
    cardText: {
        color: '#000000',
        fontSize: 20,
        fontWeight: "bold"
    },
    image: {
        height: 300,
        width: '100%',
        borderRadius: 20,
    },
    sourceText: {
        color: '#000000',
        fontSize: 20,
        fontWeight: "bold"
    },
});

export default NewsScreen;