import React from "react";
import { View,TouchableOpacity,Text } from "react-native";
import styles from "../../Style";
const Task =(props)=>{

    return(
<View style={styles.taskview}>
<TouchableOpacity style={props.item?.status?[styles.checkbox,styles.backgroundColorT]:[styles.checkbox]} onPress={()=>{props.onPressCheckbox(props.item)}}></TouchableOpacity>
<Text style={styles.tasktitle}>{props.item?.title}</Text>
</View>
    )
};
export default Task;