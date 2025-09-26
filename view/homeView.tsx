import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Exercise } from '../types/exercise';
import ExerciseCard from '../components/exerciseCard';

export default function HomeView(): React.JSX.Element {
  const [exercises, setExercises] = useState<Exercise[]>([
    { id: '1', name: 'Push-ups', reps: 15, completed: false },
    { id: '2', name: 'Squats',  reps: 20, completed: true },
    { id: '3', name: 'Sit-ups', reps: 20, completed: false },
    { id: '4', name: 'Lunges',  reps: 10, completed: false },
  ]);

  const toggleCompleted = (id: string) => {
    setExercises(prev =>
      prev.map(exobj => (exobj.id === id ? { ...exobj, completed: !exobj.completed } : exobj))
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top','left','right','bottom']}>
      <Text style={styles.title}>Mini Workout Tracker</Text>
      <Text style={styles.sectionLabel}>EXERCISE LIST</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExerciseCard exercise={item} onToggle={toggleCompleted} />
        )}
        contentContainerStyle={{ padding: 5 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8f8'},
  title: { fontSize: 24, fontWeight: '700', textAlign: 'left', padding: 20},
  sectionLabel: { fontSize: 15, fontWeight: '600', marginTop: 6, marginBottom: 8, marginLeft:5 },
});
