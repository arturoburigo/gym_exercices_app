import { Center, VStack, Image, Text, Heading, ScrollView } from "native-base";

import LogoImg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import { Input } from "@components/Input";
import { Button } from "@components/Button"

export function SignIn() {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} bg={"gray.700"} px={10}>
                <Image 
                    source={BackgroundImg}   
                    alt="People training"
                    resizeMode="contain" 
                    position="absolute"
                />

                <Center my={24}>
                    <LogoImg/>
                    <Text color={"gray.100"} fontSize={"sm"}>
                        Train your mind and your body!
                    </Text>
                </Center>

                <Center>
                    <Heading color={"gray.100"} fontSize={"xl"} mb={6} fontFamily={"heading"}>
                        Acess your account
                    </Heading>

                    <Input 
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Input 
                        placeholder="Password"
                        secureTextEntry
                        autoCapitalize="none"
                    />

                    <Button title="Login"/>

                </Center>

                <Center mt={24}>
                    <Text color={"gray.100"} fontSize={"sm"} fontFamily={"body"} mb={3}>
                        Don't have acess?
                    </Text>

                    <Button title="Create an Account" variant={"outline"}/>
                </Center>

            </VStack>
        </ScrollView>

    )
}