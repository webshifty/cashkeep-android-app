import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
    Box,
    Heading,
    Text,
    Stack,
} from "native-base";

const SignalsScreen = (props) => {
    if (props.list.count_today_signals > 0) {
        return (
            <Box flex={1} bg="brand.900" alignItems="center" justifyContent="center">
                <ScrollView showsVerticalScrollIndicator={false}>
                    {props.list.data.map((item) => {
                        return (
                            <Box key={'box1' + item.id}>
                                <Box width="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200"
                                     borderWidth="1" _dark={{
                                    borderColor: "coolGray.600",
                                    backgroundColor: "brand.900"
                                }} _web={{
                                    shadow: 2,
                                    borderWidth: 0
                                }} _light={{
                                    backgroundColor: "gray.50"
                                }}
                                     key={'box2' + item.id}
                                >
                                    <Stack p="4" space={3}>
                                        <Stack space={2}>
                                            <Heading size="md" ml="-1">
                                                💼 {item.day_ticker_request_token}
                                            </Heading>
                                        </Stack>
                                        <Text fontWeight="400">
                                            Безопасная торговля в 4 уровня:
                                        </Text>
                                        <Text fontWeight="400" italic>
                                            Оранжевые - покупки
                                        </Text>
                                        <Text fontWeight="400" italic>
                                            Зеленые - продажи{'\n'}{'\n'}
                                        </Text>

                                        <Text fontWeight="400">
                                            🟧 {item.buy_point_1}
                                        </Text>
                                        <Text fontWeight="400">
                                            🟩 {item.sell_point_1}{'\n'}{'\n'}
                                        </Text>

                                        <Text fontWeight="400">
                                            🟧 {item.buy_point_2}
                                        </Text>
                                        <Text fontWeight="400">
                                            🟩 {item.sell_point_2}{'\n'}{'\n'}
                                        </Text>

                                        <Text fontWeight="400">
                                            🟧 {item.buy_point_3}
                                        </Text>
                                        <Text fontWeight="400">
                                            🟩 {item.sell_point_3}{'\n'}{'\n'}
                                        </Text>

                                        <Text fontWeight="400">
                                            🟧 {item.buy_point_4}
                                        </Text>
                                        <Text fontWeight="400">
                                            🟩 {item.sell_point_4}{'\n'}{'\n'}
                                        </Text>

                                        <Text fontWeight="400" italic>
                                            Сетап составлен ботом при помощи искусственного интеллекта.
                                        </Text>
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
    } else {
        return (
            <Box flex={1} bg="brand.900" alignItems="center" justifyContent="center">
                <Text color="brand.50">Еще не было ни одного сигнала на сегодня. Будьте в курсе подписавшись на наш
                    телеграм канал:</Text>
                <Link href="https://t.me/cashkeep" _text={{
                    color: "brand.0"
                }}>
                    ПОДПИСАТЬСЯ
                </Link>
            </Box>
        );
    }
};

export default SignalsScreen;