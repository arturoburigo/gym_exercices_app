import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { VStack, Text, ScrollView, Center, Skeleton, Heading, Toast } from "native-base";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import { Alert, TouchableOpacity } from "react-native";

const PHOTO_SIZE = 33

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState("https://github.com/arturoburigo.png")

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true)
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4,4],
        allowsEditing: true,
        selectionLimit: 1
      });
  
      console.log(photoSelected)
  
      if(photoSelected.canceled){
        return
      }

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri) as FileSystem.FileInfo

        if(photoInfo.size && (photoInfo.size / 1024 / 1024) > 5 ) {
          return Toast.show({
            title: "Select an Image with less than 5MB",
            placement: 'top',
            bgColor: 'red.500'
          })
        } else {
            Toast.show({
            title: "You changed your image profile",
            placement: 'top',
            bgColor: 'green.500'
          })
        }
        
        setUserPhoto(photoSelected.assets[0].uri)
      }
    } catch (error){
      console.log(error)
    } finally {
      setPhotoIsLoading(false)
    }
  }

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
                  source={{ uri: userPhoto }} 
                  size={PHOTO_SIZE} 
                  alt="User Photo" 
                />
            }
            <TouchableOpacity activeOpacity={0.7} onPress={handleUserPhotoSelect}>
              <Text color={"green.500"} fontSize={"md"} fontWeight={"bold"} mt={2} mb={8}>
                Change Photo
              </Text>
            </TouchableOpacity>
            
            <Input
              bg={"gray.600"}
              placeholder="Name"
            />

            <Input
              bg={"gray.600"}
              value="burigoarturo3@gmail.com"
              isDisabled
            />
          </Center>

          <VStack px={10} mt={8} mb={9}>
            <TouchableOpacity activeOpacity={0.7} onPress={handleUserPhotoSelect}>
              <Heading color={"gray.200"} fontSize={"md"} mb={2}>
                Change password
              </Heading>
            </TouchableOpacity>
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

            <Button title="Done" mt={2}/>

          </VStack>
        </ScrollView>
    </VStack>
  );
}
