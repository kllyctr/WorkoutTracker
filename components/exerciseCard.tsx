import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Exercise } from '../types/exercise';

type Props = {
  exercise: Exercise;
  onToggle: (id: string) => void;
};

export default function ExerciseCard({ exercise, onToggle }: Props) {
  return (
    <View
      style={[
        styles.card,
        exercise.completed && { backgroundColor: '#eaf7ea', borderColor: '#cfe9cf' },
      ]}
    >
      <View style={styles.rowBetween}>
        <Text
          style={[
            styles.name,
            exercise.completed && { textDecorationLine: 'line-through', color: '#5f8b5f' },
          ]}
        >
          {exercise.name} ({exercise.reps} Reps)
        </Text>

        <Pressable onPress={() => onToggle(exercise.id)}>
          <Text style={[styles.toggleText, exercise.completed && styles.undoText]}>
            {exercise.completed ? 'Undo' : 'Mark Complete'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: 16, fontWeight: '600' },
  toggleText: { color: '#ffffff', fontWeight: '600', backgroundColor: '#00a833', padding: 5, borderRadius: 8, overflow: 'hidden' },
  undoText: {
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#afafaf',
    overflow: 'hidden',
  },
});
