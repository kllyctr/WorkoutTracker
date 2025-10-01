import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Exercise } from '../types/exercise';

type Props = {
  exercise: Exercise;
  onToggleComplete: (id: string) => void;
  onChangeReps: (id: string, reps: number) => void;
  onDelete: (id: string) => void;
};

const ExerciseCard: React.FC<Props> = ({ exercise, onToggleComplete, onChangeReps, onDelete }) => {
  const decrease = () => onChangeReps(exercise.id, Math.max(0, exercise.reps - 1));
  const increase = () => onChangeReps(exercise.id, exercise.reps + 1);

  return (
    <View style={[styles.card, exercise.completed && styles.completedCard]}>
      <View style={styles.row}>
        <Text style={[styles.name, exercise.completed && styles.completedText]}>
          {exercise.name} ({exercise.reps} Reps)
        </Text>
        
        <View style={styles.repsRow}>
          <TouchableOpacity style={styles.adjustBtn} onPress={decrease} disabled={exercise.completed}>
            <Text style={styles.adjustText}>-</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            editable={!exercise.completed}
            value={String(exercise.reps)}
            onChangeText={(txt) => {
              const val = parseInt(txt, 10);
              onChangeReps(exercise.id, isNaN(val) ? 0 : val);
            }}
          />

          <TouchableOpacity style={styles.adjustBtn} onPress={increase} disabled={exercise.completed}>
            <Text style={styles.adjustText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onDelete(exercise.id)}>
            <Text style={styles.delete}>✕</Text>
          </TouchableOpacity>
      </View>
      </View>

      <TouchableOpacity
        style={[styles.toggleBtn, exercise.completed ? styles.undoBtn : styles.completeBtn]}
        onPress={() => onToggleComplete(exercise.id)}
      >
        <Text style={styles.toggleText}>
          {exercise.completed ? 'Undo' : 'Mark Complete'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExerciseCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    margin: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  completedCard: {
    backgroundColor: '#E6FBE6',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: { fontSize: 18, fontWeight: '600' },
  completedText: { textDecorationLine: 'line-through', color: '#555' },
  delete: { fontSize: 18, color: '#d11a2a', marginLeft: 20},
  repsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  adjustBtn: {
    backgroundColor: '#f0f0f0',
    padding: 3,
    borderRadius: 4,
  },
  adjustText: { fontSize: 18, fontWeight: '700' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 8,
    borderRadius: 6,
    paddingHorizontal: 8,
    minWidth: 20,
    textAlign: 'center',
    fontSize: 15,
  },
  toggleBtn: {
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  completeBtn: { backgroundColor: '#4CAF50' },
  undoBtn: { backgroundColor: '#9E9E9E' },
  toggleText: { color: '#fff', fontWeight: '600' },
});
