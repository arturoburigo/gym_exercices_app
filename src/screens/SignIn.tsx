import { Center, VStack, Image, Text, Heading, ScrollView } from "native-base";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import LogoImg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="People training"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoImg />
          <Text color={"gray.100"} fontSize={"sm"}>
            Train your mind and your body!
          </Text>
        </Center>

        <Center>
          <Heading color={"gray.100"} fontSize={"xl"} mb={6} fontFamily={"heading"}>
            Acess your account
          </Heading>

          <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />

          <Input placeholder="Password" secureTextEntry autoCapitalize="none" />

          <Button title="Login 🥇" />
        </Center>

        <Center mt={24}>
          <Text color={"gray.100"} fontSize={"sm"} fontFamily={"body"} mb={3}>
            Don't have acess?
          </Text>

          <Button title="Create an Account" variant={"outline"} onPress={handleNewAccount} />
        </Center>
      </VStack>
    </ScrollView>
  );
}
