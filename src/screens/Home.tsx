import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { FlatList, HStack, Heading, Text, VStack } from "native-base";
import { useState } from "react";

export function Home() {
  const [groups, setGroups] = useState(["Backs", "Shoulders", "Biceps", "Triceps"]);
  const [exercices, setExercises] = useState(['Puxada Frontal', 'Remada curvada'])
  const [isSelected, setIsSelected] = useState("Backs");

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise')
  }

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group name={item} isActive={isSelected === item} onPress={() => setIsSelected(item)} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxHeight={10}
        minHeight={10}
      />

      <VStack flex={1} px={6}>
        <HStack justifyContent={"space-between"} mb={4}>
          <Heading color={"gray.200"} fontSize={"md"}>
            Exercises
          </Heading>
          <Text color={"gray.200"} fontSize={"sm"}>
            4
          </Text>
        </HStack>
       
        <FlatList
          data={exercices}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ExerciseCard
              onPress={handleOpenExerciseDetails}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{paddingBottom: 20}}
          
        />

      </VStack>
    </VStack>
  );
}
