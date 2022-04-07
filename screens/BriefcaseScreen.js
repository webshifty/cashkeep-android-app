import { Text, Box, Link } from 'native-base';

function BriefcaseScreen() {
    return (
        <Box flex={1} bg="brand.900" alignItems="center" justifyContent="center">
            <Text color="brand.50">To connect your case register on:</Text>
            <Link href="https://cashkeep.info/register" _text={{
                color: "brand.0"
            }}>
                Click to go
            </Link>
        </Box>
    );
}

export default BriefcaseScreen;