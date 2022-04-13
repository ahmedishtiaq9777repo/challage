import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../../Style";
const Task = ({ item, onPressCheckbox = null }) => {
  return (
    <View style={styles.taskview}>
      <TouchableOpacity
        style={
          item?.status
            ? [styles.checkbox, styles.backgroundColorT]
            : [styles.checkbox]
        }
        onPress={() => (onPressCheckbox ? onPressCheckbox(item) : null)}
      ></TouchableOpacity>
      <Text style={styles.tasktitle}>{item?.title}</Text>
    </View>
  );
};
export default Task;
