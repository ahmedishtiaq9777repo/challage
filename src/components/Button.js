import react from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../Style";
const Button = ({ title, onPress, bottomstyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[bottomstyle, styles.buttonStyle]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
