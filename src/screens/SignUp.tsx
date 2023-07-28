import { Center, VStack, Image, Text, Heading, ScrollView } from "native-base";
import {Controller, useForm} from 'react-hook-form'
import { useNavigation } from "@react-navigation/native";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

import LogoImg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

type FormDataProps = {
  name: string
  password: string
  confirmPassword: string
  email: string
}

const signUpSchema = yup.object({
  name: yup.string().required('Inform a name'),
  email: yup.string().required('Inform an e-mail').email('E-mail invalid'),
  password: yup.string().required('Inform a password').min(6, 'Password must be at least 6 words'),
  confirmPassword: yup.string().required('Inform a password').oneOf([yup.ref('password')], 'Password does not match')
})

export function SingUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const {control, handleSubmit, formState: {errors}} = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  })

  function handleNavigateSignIn() {
    navigation.navigate("signIn");
  }

  function handleSignUp(data: FormDataProps) {
    console.log(data)
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

          <Controller
            name="name"
            control={control}
            render={({ field: {onChange, value}}) => (              
              <Input 
                placeholder="Your Name" 
                keyboardType="default" 
                onChangeText={onChange} 
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field: {onChange, value}}) => (              
              <Input 
                placeholder="E-mail" 
                keyboardType="email-address" 
                autoCapitalize="none"
                onChangeText={onChange} 
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: {onChange, value}}) => (              
              <Input 
                placeholder="Password" 
                secureTextEntry
                autoCapitalize="none"
                onChangeText={onChange} 
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: {onChange, value}}) => (              
              <Input 
                placeholder="Confirm Password" 
                secureTextEntry
                autoCapitalize="none"
                onChangeText={onChange} 
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
                errorMessage={errors.confirmPassword?.message}
              />
            )}
          />

          <Button title="I'm ready 💪🏻🏋🏻‍♀️" onPress={handleSubmit(handleSignUp)} />
        </Center>

        <Button
          title="Go back to Login"
          variant={"outline"}
          mt={24}
          onPress={handleNavigateSignIn}
        />
      </VStack>
    </ScrollView>
  );
}
