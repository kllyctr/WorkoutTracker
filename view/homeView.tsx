import React, { useState } from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Exercise } from '../types/exercise';
import ExerciseCard from '../components/exerciseCard';
import AddExerciseForm from '../components/addExerciseForm';

const HomeView: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([
    { id: '1', name: 'Push-ups', reps: 15, completed: false },
    { id: '2', name: 'Squats', reps: 20, completed: false },
    { id: '3', name: 'Sit-ups', reps: 20, completed: false },
  ]);

  const addExercise = (name: string, reps: number) => {
    const newEx: Exercise = {
      id: Date.now().toString(),
      name,
      reps,
      completed: false,
    };
    setExercises([...exercises, newEx]);
  };

  const toggleComplete = (id: string) => {
    setExercises(exercises.map(e =>
      e.id === id ? { ...e, completed: !e.completed } : e
    ));
  };

  const changeReps = (id: string, reps: number) => {
    setExercises(exercises.map(e =>
      e.id === id ? { ...e, reps } : e
    ));
  };

  const deleteExercise = (id: string) => {
    setExercises(exercises.filter(e => e.id !== id));
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.title}>Mini Workout Tracker 🏋️</Text>

      

      <View style={{ flex: 1 }}>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ExerciseCard
              exercise={item}
              onToggleComplete={toggleComplete}
              onChangeReps={changeReps}
              onDelete={deleteExercise}
            />
          )}
          ListEmptyComponent={<Text style={styles.empty}>No exercises yet.</Text>}
        />
      </View>

      <AddExerciseForm onAdd={addExercise} />
    </SafeAreaView>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 22, fontWeight: '800', margin: 16 },
  empty: { textAlign: 'center', marginTop: 30, color: '#888' },
});
