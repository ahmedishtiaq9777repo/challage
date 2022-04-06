import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import styles from "../../Style";
import Ionicons from "@expo/vector-icons/Ionicons";
const Header = (props) => {
  return (
    <View style={styles.headerhome}>
      <View style={styles.headercontent}>
      {props.leftArrowIcon &&  <TouchableOpacity style={styles.leftarrow} onPress={props.onbackPress}><Ionicons name="chevron-back-outline" size={20} color="black" /></TouchableOpacity>}
        <Text style={styles.todoText}>{props.title}</Text>
        {props.rightView && <View style={styles.rightview}>
        
        <TouchableOpacity  style={styles.searchicon}><Ionicons name="search-outline" size={23} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.bellicon}><Ionicons name="notifications-outline"  color="black" size={23}/><Text style={styles.dot}>.</Text></TouchableOpacity>
        <TouchableOpacity style={styles.reorder}><Ionicons name='reorder-three' size={27}  color="black" /></TouchableOpacity>
         </View>}
        
      </View>
    </View>
  );
};
export default Header;
