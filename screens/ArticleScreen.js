import { View, StyleSheet, ScrollView } from 'react-native';
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, Button, Divider } from "native-base";

function ArticleScreen() {
    return (
        <Box flex={1} bg="brand.900" alignItems="center" justifyContent="center">
            <Text color="brand.50">News!</Text>
        </Box>
    );
}

export default ArticleScreen;