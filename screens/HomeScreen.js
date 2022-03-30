import { Text, Box } from 'native-base';

function HomeScreen() {
    return (
        <Box flex={1} bg="brand.900" alignItems="center" justifyContent="center">
            <Text color="brand.50">Home!</Text>
        </Box>
    );
}

export default HomeScreen;