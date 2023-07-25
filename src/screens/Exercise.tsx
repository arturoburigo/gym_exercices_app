import { VStack, Text, Icon, HStack, Heading, Image, Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import {Feather} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg"
import SeriesSvg from "@assets/series.svg"
import RepetitionsSvg from "@assets/repetitions.svg"
import { Button } from "@components/Button";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
        <VStack px={8} bg={"gray.600"} pt={12}>
          <TouchableOpacity>
            <Icon as= {Feather} name="arrow-left" color="green.500" size={6} onPress={handleGoBack}/>
          </TouchableOpacity>

          <HStack justifyContent={"space-between"} mt={4} mb={8} alignItems={"center"}>
            <Heading color={"gray.100"} fontSize={"lg"} flexShrink={1}>
              Puxada Frontal
            </Heading>

            <HStack alignItems={"center"}>
              <BodySvg/>
              <Text color={"gray.200"} ml={1} textTransform={"capitalize"}>
                Shoulders
              </Text>
            </HStack>

          </HStack>
        </VStack>
        <ScrollView>
          <VStack p={6}>
            <Image
              w={"full"}
              h={80}
              source={{
                uri: "https://blogeducacaofisica.com.br/wp-content/uploads/2017/07/membros-superiores.jpg",
              }}
              alt="Exercise name"
              resizeMode="cover"
              rounded={"lg"}
              mb={3}
            />

            <Box bg={"gray.600"} rounded={"md"} pb={4} px={4}>
              <HStack alignItems={"center"} justifyContent={"space-around"} mb={6} mt={5}>
                <HStack>
                  <SeriesSvg />
                  <Text color={"gray.200"} ml={2}>3 Series</Text>
                </HStack>

                <HStack>
                  <RepetitionsSvg />
                  <Text color={"gray.200"} ml={2}>12 Reps</Text>
                </HStack>
              </HStack>
              <Button title="Completed"/>
            </Box>
          </VStack>
        </ScrollView>
    </VStack>
  );
}
