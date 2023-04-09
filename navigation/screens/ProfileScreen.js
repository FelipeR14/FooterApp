import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Heading, AspectRatio, Image, Text, Center, Stack, NativeBaseProvider, ScrollView, Avatar, Container, View } from "native-base";


const ProfileScreen = () => {
    return <Center>
        <br></br> 
        <Container style={styles.container} rounded="lg" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
        <View style={styles.userProfile}>
        
            <Center>
                <Heading> Perfil </Heading>
                <br></br> 
                <Avatar style={styles.avatar} source={{
                    uri: "https://i.postimg.cc/mkrcz84Z/changuito.jpg"
                }}>                
                </Avatar>
                <br></br> 
                <View style={styles.userInfo}>
                    <Text style={styles.name}>Chang Ito</Text>
                    <Text style={styles.correo} note>Changuito2020@gmail.com</Text>
                    <Text style={styles.date} note> Ingresó en 2023</Text>
                </View>
            </Center>
        </View>
    </Container>
    </Center>;
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor:'white',
    },
    userProfile: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      marginRight: 10,
      width:'100px',
      height:'100px',
      alignItems:'center',
      align: 'center'
    },
    userInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    name: {        
      textAlign:'center',
      fontWeight: 'bold',
    },
    correo: {
      marginTop: 5,
      textAlign:'center',
      color: 'gray'
    },
    date: {
      marginTop: 5,
      textAlign:'center',
      color: 'gray'
    },
  });

export default () => {
    return (
        <NativeBaseProvider>
            
            <ProfileScreen />
        </NativeBaseProvider>
    );
};