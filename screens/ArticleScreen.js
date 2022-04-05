import React from "react";
import { StyleSheet, ScrollView } from 'react-native';
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, Button, Divider } from "native-base";
import RenderHtml from 'react-native-render-html';

const ArticleScreen = (props) => {
    const item = props.list.data[0];
    const { width } = '100%';
    const source = {
        html:''+item.text
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <Box flex={1} width="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                        uri: props.url + item.image
                    }} alt="image" />
                </AspectRatio>
            </Box>
            <Text>{`\n`}</Text>
            <Box width="95%" mx="auto">
            <Stack space={2}>
                <Heading size="md" ml="-1">
                    { item.title }
                </Heading>
            </Stack>
                <Text>{`\n`}</Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
                <HStack alignItems="center">
                    <Text color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }} fontWeight="400">
                        { item.created_at }
                    </Text>
                </HStack>
            </HStack>
                <Text>{`\n`}</Text>
                <RenderHtml
                    contentWidth={width}
                    source={source}
                />
                <Text>{`\n`}</Text>
            <Text fontWeight="400">
                Источник: { props.url }
            </Text>
            </Box>
        </Box>
        </ScrollView>
    );
}

export default ArticleScreen;