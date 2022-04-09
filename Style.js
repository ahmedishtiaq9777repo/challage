import react from "react";
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
  },
  overlayClose: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
  mainScreen: {
    flex: 1,
    marginHorizontal: "5%",
    marginVertical: "5%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  headerhome: {
    height: 110,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
  },
  headercontent: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 25,

    alignItems: "flex-end",
    paddingBottom: 20,
  },
  todoText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  rightview: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  searchicon: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 10,
  },
  bellicon: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 10,
  },
  dot: {
    fontSize: 50,
    color: "green",
    position: "absolute",
    bottom: "10%",
    right: "12%",
  },
  reorder: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  leftarrow: {
    marginRight: 10,
  },
  buttonStyle: {
    backgroundColor: "green",
    alignItems: "center",
    marginHorizontal: "8%",
    height: 35,
    justifyContent: "center",
    borderRadius: 10,
  },
  bottomstyle: {
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#f5f5f5",
  },
  buttonView: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop:80
  },
  taskform: {
    flex: 1,
  },
  marginHorizontal: {
    marginHorizontal: "10%",
  },
  marginTopn: {
    marginTop: 15,
  },
  margintoploader:{
    marginTop: 20,
  },
  marginBottomn: {
    marginBottom: 5,
  },
  marginBottompending:{
    marginBottom:"10%",
  },
  time:{
    flexDirection: "row",
    backgroundColor: "rgba(211, 211, 211, 0.5)",
    height: 37,
    alignItems: "center",
    paddingHorizontal: 10,
  },
 
  field: {
    marginHorizontal: "10%",
    backgroundColor: "rgba(211, 211, 211, 0.5)",
    height: 36,
    paddingLeft: 10,
    borderRadius: 5,
  },
  fieldtitle: {
    marginHorizontal: "10%",
    marginTop: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  arrowDownIcon: {
    flex: 1,
    height: 36,
    marginLeft: "55%",
    alignItems: "flex-end",
    paddingRight: 10,

    justifyContent: "center",
  },
  dateConfirmbtn: {
    marginHorizontal: "20%",
    backgroundColor: "green",
    alignItems: "center",
    height: 30,
    justifyContent: "center",
    borderRadius: 8,
  },
  dateConfirmbtnText: { fontSize: 20, fontWeight: "700", color: "white" },
  taskheading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.7)",

    marginTop:30,
    marginBottom:30,
  },
  taskview: {
    //  width:Dimensions.get("screen").width,
    width: "80%",

    marginTop: 5,
    height: 50,
    marginHorizontal: "10%",
    flexDirection: "row",

    marginRight: 200,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 6,
    textAlignVertical: "center",
  },
  backgroundColorT: {
    backgroundColor: "red",
  },

  tasktitle: {
    fontWeight: "400",
    fontSize: 17,
    marginLeft: "4%",
    width: "90%",
    height: 46,
    textAlignVertical: "center",
    marginTop:"0.4%",
   
  },
});
