import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { VStack, Text, ScrollView, Center, Skeleton, Heading } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const PHOTO_SIZE = 33

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  return (
    <VStack flex={1}>
        <ScreenHeader title="Perfil"/>
        <ScrollView>
          <Center mt={6} px={10}>
            {     
              photoIsLoading ? 
                <Skeleton  
                  w={PHOTO_SIZE} 
                  h={PHOTO_SIZE} 
                  rounded="full" 
                  startColor="gray.600" 
                  endColor="gray.400" 
                />
                :
                <UserPhoto 
                  source={{ uri: "https://github.com/arturoburigo.png" }} 
                  size={PHOTO_SIZE} 
                  alt="User Photo" 
                />
            }
            <TouchableOpacity activeOpacity={0.7}>
              <Text color={"green.500"} fontSize={"md"} fontWeight={"bold"} mt={2} mb={8}>
                Change Photo
              </Text>
            </TouchableOpacity>
            
            <Input
              bg={"gray.600"}
              placeholder="Nome"
            />

            <Input
              bg={"gray.600"}
              value="burigoarturo3@gmail.com"
              isDisabled
            />
          </Center>

          <VStack px={10} mt={8} mb={9}>
            <Heading color={"gray.200"} fontSize={"md"} mb={2}>
              Alterar senha
            </Heading>
            <Input 
              bg={"gray.600"}
              placeholder="Password"
              secureTextEntry
            />

            <Input 
              bg={"gray.600"}
              placeholder="New Password"
              secureTextEntry
            />

            <Input 
              bg={"gray.600"}
              placeholder="Confirm New Password"
              secureTextEntry
            />

            <Button title="Atualizar" mt={2}/>

          </VStack>
        </ScrollView>
    </VStack>
  );
}
