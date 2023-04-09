import * as React from 'react';
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, ScrollView } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeScreen = () => {
    return <ScrollView>
        <Center>
            <br/>
            <Image source={require('../../img/logo.png')}
                alt="FNSM 2023 logo"
                style={{ width: '200px', height: '100px' }}
                alignContent={"center"} />
            <br/>
        </Center>
        <Box alignItems="center">
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                        <Image source={require('../../img/Dimitri.jpg')} alt="Dimitri Vegas" />
                    </AspectRatio>
                    <Center bg="#0A9FAC" _dark={{
                        bg: "violet.400"
                    }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" bottom="0" px="3" py="1.5">
                        14 de Abril
                    </Center>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            Dimitri Vegas & Like Mike
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: "#0A9FAC"
                        }} _dark={{
                            color: "#0A9FAC"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            Foro de las estrellas
                        </Text>
                    </Stack>
                    <Text fontWeight="400" textAlign={'justify'}>
                        Asiste al conteo de la Feria Nacional de San Marcos 2023 en el Foro de las estrellas, junto a Dimitri Vegas y Like Mike.
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }} fontWeight="400">
                                Acceso desde 7:00PM
                            </Text>
                        </HStack>
                        <HStack alignItems="center">
                            <Ionicons name='alarm-outline' size={25} color='#0A9FAC' />
                        </HStack>
                    </HStack>
                </Stack>
            </Box>
            <br></br>
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                        <Image source={require('../../img/camilo.jpg')} alt="Camilo" />
                    </AspectRatio>
                    <Center bg="#0A9FAC" _dark={{
                        bg: "violet.400"
                    }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" bottom="0" px="3" py="1.5">
                        15 de Abril
                    </Center>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            Camilo
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: "#0A9FAC"
                        }} _dark={{
                            color: "#0A9FAC"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            Foro de las estrellas
                        </Text>
                    </Stack>
                    <Text fontWeight="400" textAlign={'justify'}>
                        Asiste y acompaña por primera vez en la FNSM 2023 a ¡Camilo! Escucha sus éxitos como "Tutú", "Ropa Cara" y mucho más.
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }} fontWeight="400">
                                Acceso desde 7:00PM
                            </Text>
                        </HStack>
                        <HStack alignItems="center">
                            <Ionicons name='alarm-outline' size={25} color='#0A9FAC' />
                        </HStack>
                    </HStack>
                </Stack>
            </Box>
            <br></br>
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                        <Image source={require('../../img/rod.jpg')} alt="Rod Stewart" />
                    </AspectRatio>
                    <Center bg="#0A9FAC" _dark={{
                        bg: "violet.400"
                    }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" bottom="0" px="3" py="1.5">
                        23 de Abril
                    </Center>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            Rod Stewart
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: "#0A9FAC"
                        }} _dark={{
                            color: "#0A9FAC"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            Foro de las estrellas
                        </Text>
                    </Stack>
                    <Text fontWeight="400" textAlign={'justify'}>
                        Asiste y acompaña al cantante y compositor británico con una exitosa carrera en el mundo de la música desde la década de 1960.
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }} fontWeight="400">
                                Acceso desde 7:00PM
                            </Text>
                        </HStack>
                        <HStack alignItems="center">
                            <Ionicons name='alarm-outline' size={25} color='#0A9FAC' />
                        </HStack>
                    </HStack>
                </Stack>
            </Box>
            <br></br>
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                        <Image source={require('../../img/tigres del norte.jpg')} alt="Tigres del Norte" />
                    </AspectRatio>
                    <Center bg="#0A9FAC" _dark={{
                        bg: "violet.400"
                    }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" bottom="0" px="3" py="1.5">
                        7 de Mayo
                    </Center>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            Tigres del Norte
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: "#0A9FAC"
                        }} _dark={{
                            color: "#0A9FAC"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            Foro de las estrellas
                        </Text>
                    </Stack>
                    <Text fontWeight="400" textAlign={'justify'}>
                        Ya está cerrada, con tres candados y no hablamos del Foro de las estrellas, ven y asiste gratis a cantar a todo pulmón "La puerta negra",
                        "Ni parientes somos" y muchas más.
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }} fontWeight="400">
                                Acceso desde 7:00PM
                            </Text>
                        </HStack>
                        <HStack alignItems="center">
                            <Ionicons name='alarm-outline' size={25} color='#0A9FAC' />
                        </HStack>
                    </HStack>
                </Stack>
            </Box>
            <br></br>

        </Box>
    </ScrollView> 
    
}
export default () => {
    return (
        <NativeBaseProvider>
            <HomeScreen />
        </NativeBaseProvider>
    );
};



