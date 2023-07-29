import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, SectionList, Text, VStack } from "native-base";
import { useState } from "react";

export function History() {
    const [exercises, setExercises] = useState([
      {
        title: "07.28.2023",
        data: ["Puxada Frontal", "Remada Unilateral"]
      },
      {
        title: "07.26.2023",
        data: ["Puxada Frontal"]
      }
    ])


  return (
    <VStack flex={1}>
      <ScreenHeader title="Exercises History"/>

      <SectionList 
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <HistoryCard/>
        )}
        renderSectionHeader={({section}) => (
          <Heading color="gray.200" fontSize="md" mt={9} mb={3}>
            {section.title}
          </Heading>
        )}
        px={6}
        contentContainerStyle={exercises.length===0 && {flex: 1, justifyContent: 'center'}}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center" fontFamily="heading" fontSize={"md"}>
            There is no exercises register yet. {'\n'}
            Let's do some exercises today? 💪🏻
          </Text>
        )}

      />


    </VStack>
  );
}
