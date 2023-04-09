import * as React from 'react';
import { Box, Heading, AspectRatio, Image, Text, Center, Stack, NativeBaseProvider, ScrollView } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

const ScheScreen = () => {
    return (
        <ScrollView>
            <Center>
                <br />
                <Heading> Mi agenda</Heading>
                <br />
            </Center>
            <Box alignItems="center">
                <Box w="300" maxW="300" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={require('../../img/ManuelTurizo.png')} alt="Manuel Turizo" />
                        </AspectRatio>
                        <Center bg="#0A9FAC" _dark={{
                            bg: "violet.400"
                        }} _text={{
                            color: "warmGray.50",
                            fontWeight: "700",
                            fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            29 de Abril
                        </Center>
                    </Box>
                    <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                                Manuel Turizo
                            </Heading>
                            <Text fontSize="xs" _light={{
                                color: "#0A9FAC"
                            }} _dark={{
                                color: "#0A9FAC"
                            }} fontWeight="500" ml="-0.5" mt="-1">
                                Foro de las estrellas
                            </Text>                        
                            <Ionicons name='remove-circle-outline' size={25} color='#0A9FAC' />
                        </Stack>
                    </Stack>
                </Box>
                
                <br />
                <Box w="300" maxW="300" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={require('../../img/biza.jpg')} alt="Bizarrap" />
                        </AspectRatio>
                        <Center bg="#0A9FAC" _dark={{
                            bg: "violet.400"
                        }} _text={{
                            color: "warmGray.50",
                            fontWeight: "700",
                            fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            6 de Mayo
                        </Center>
                    </Box>
                    <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                                Bizarrap
                            </Heading>
                            <Text fontSize="xs" _light={{
                                color: "#0A9FAC"
                            }} _dark={{
                                color: "#0A9FAC"
                            }} fontWeight="500" ml="-0.5" mt="-1">
                                Foro de las estrellas
                            </Text>
                            <Ionicons name='remove-circle-outline' size={25} color='#0A9FAC' />
                            
                        </Stack>
                    </Stack>
                </Box>

            </Box>
            <br></br>
        </ScrollView>
    );
}
export default () => {
    return (
        <NativeBaseProvider>
            <ScheScreen />
        </NativeBaseProvider>
    );
};
