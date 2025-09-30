import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  onAdd: (name: string, reps: number) => void;
};

const AddExerciseForm: React.FC<Props> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('10');

  const handleAdd = () => {
    if (!name.trim()) return;
    onAdd(name.trim(), parseInt(reps, 10) || 0);
    setName('');
    setReps('10');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { flex: 1 }]}
        placeholder="Exercise Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, { width: 60, marginLeft: 8 }]}
        keyboardType="numeric"
        placeholder="Reps"
        value={reps}
        onChangeText={setReps}
      />
      <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddExerciseForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 30,
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: '#fff',
    fontSize: 20,
  },
  addBtn: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 12,
    marginLeft: 8,
    borderRadius: 6,
    justifyContent: 'center',
  },
  addText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
  },
});
