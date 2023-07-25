import { HStack, Heading, Image, VStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg={"gray.500"} alignItems={"center"} p={2} pr={4} rounded={"md"} mb={3}>
        <Image
          source={{
            uri: "https://blogeducacaofisica.com.br/wp-content/uploads/2017/07/membros-superiores.jpg",
          }}
          alt="Puxada frontal"
          h={16}
          w={16}
          rounded={"md"}
          mr={4}
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading color={"white"} fontSize={"lg"} fontFamily={"heading"}>
            Remada Unilateral
          </Heading>
          <Text color={"gray.200"} fontSize={"sm"} mt={1} numberOfLines={2}>
            3 series x 12 Reps
          </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color={"gray.300"} />
      </HStack>
    </TouchableOpacity>
  );
}
