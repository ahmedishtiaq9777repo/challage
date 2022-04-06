import react from "react";
import {TouchableOpacity,Text} from 'react-native'; 
import styles from "../../Style";
const Button=(props)=>{
return(<TouchableOpacity onPress={props.onPress} style={[props.bottomstyle,styles.buttonStyle]}>
<Text style={styles.buttonText}>{props.title}</Text>
</TouchableOpacity>);
};
export default Button;