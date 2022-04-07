import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import styles from "../../Style";
import Header from "../components/HomeHeader";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import Button from "../components/Button";
import { addTasktoList } from "../store/action";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Task from "../components/Task";
import TasksData from "../db/dbStorage";
import { useToast } from "native-base";
import { TaskState,SingleTask } from "../store/reducer";

const AddTask = (props:any) => {
  const [title, setTitle] = useState<string>("");
  const [dateshow, setDateshow] = useState(false);
  const [date, setDateDeadline] = useState<Date>(new Date()); //deadline
  const [startdatemodal, setstartmodalvisible] = useState(false);
  const [enddatemodal, setenddatemodalvisible] = useState(false);
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [remind, setRemind] = useState<string>("10");
  const [repeat, setRepeat] = useState<string>("Daily");
  const alltasks = useSelector<TaskState,TaskState['taskList']>((state) => state?.taskList);
  console.log("alltesks:", alltasks);

  const localdb = new TasksData();
  const dispatch = useDispatch();
  const toast = useToast();

  //   function open() {
  //     pickerRef.current.focus();
  //   }

  //   function close() {
  //     pickerRef.current.blur();
  //   }

  const onChangeDate = (event, date:Date) => {
    setDateDeadline(date);
    console.log("date:", date);
  };
  const handleConfirmStart = (time:Date) => {
    console.log("type:",typeof(time));
    // console.warn("A time has been picked: ", time);
    console.log("time:",moment(time).format("YYYY-MM-DD"));
    
    setStartTime(time);
    setstartmodalvisible(false);
  };
  const handleConfirmEnd = (time:Date) => {
    console.log("time:",moment(time).format("h:mm A"));
    // console.warn("A time has been picked: ", time);
    setEndTime(time);
    setenddatemodalvisible(false);
  };
  const validate = () => {
    if (title != "") {
      return true;
    } else {
      return false;
    }
  };
  const addTaskbtnPress = () => {
    if (validate()) {
      if (alltasks != undefined && alltasks != null && alltasks?.length>0) {
        let TempTasks = [...alltasks];
        let lth = TempTasks.length;

        let id = TempTasks[lth - 1].Id;


        let task:SingleTask = {
          Id: id + 1,
          title: title,
          deadline: date,
          starttime: startTime,
          endtime: endTime,
          remind: remind,
          repeat: repeat,
          status: 0,
        };
        TempTasks.push(task);
        localdb.createTaskTable().then((val) => {
          console.log("Table created Succesfully");
          localdb
            .addTask(title, date, startTime, endTime, remind, repeat, 0)
            .then((res) => {
              console.log("added:", res);
              toast.show({title:"Task added successfully"});
            })
            .catch((error) => {
              console.log("error:", error);
            });
        });
        dispatch(addTasktoList(TempTasks));
      } else {
        let temp = [];
        let task = {
          Id: 1,
          title: title,
          deadline: date,
          startTime: startTime,
          endTime: endTime,
          remind: remind,
          repeat: repeat,
          status: 0,
        };
        temp.push(task);
        localdb.createTaskTable().then((val) => {
          console.log("Table created Succesfully");
          localdb
            .addTask(title, date, startTime, endTime, remind, repeat, 0)
            .then((res) => {
              console.log("added:", res);
            })
            .catch((error) => {
              console.log("error:", error);
            });
        });
        dispatch(addTasktoList(temp));
        toast.show({title:"Task added successfully"});
      }
    }else{
        toast.show({title:"Please enter title",bgColor:"red.700"});
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainScreen}>
        <Header
          title="Add task"
          onbackPress={() => props.navigation.goBack()}
          leftArrowIcon={true}
        />

        <View style={styles.taskform}>
          <Text style={styles.fieldtitle}>Title</Text>
          <TextInput
            placeholder="Enter title"
            onChangeText={(text) => setTitle(text)}
            style={styles.field}
          />
          <Text style={styles.fieldtitle}>Deadline</Text>
          <View
            style={[
              styles.field,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Text>{moment(date).format("YYYY-MM-DD")}</Text>
            <TouchableOpacity
              style={styles.arrowDownIcon}
              onPress={() => setDateshow((t) => !t)}
            >
              <Ionicons name="chevron-down-outline" size={25} />
            </TouchableOpacity>
          </View>

          {dateshow && (
            <View>
              <DateTimePicker
                value={date}
                display="inline"
                onChange={onChangeDate}
                style={{ marginHorizontal: "10%" }}
              />
              {/* <TouchableOpacity style={styles.dateConfirmbtn}>
                <Text style={styles.dateConfirmbtnText}>Confirm</Text>
              </TouchableOpacity> */}
            </View>
          )}
          <View
            style={[
              styles.marginHorizontal,
              styles.marginTopn,
              { flexDirection: "row" },
            ]}
          >
            <View style={{ width: "45%" }}>
              <Text style={{ fontWeight: "bold" }}>Start Time</Text>
              <TouchableOpacity
                onPress={() => setstartmodalvisible((t) => !t)}
                style={{
                  flexDirection: "row",
                  backgroundColor: "rgba(211, 211, 211, 0.5)",
                  height: 37,
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <DateTimePickerModal
                  isVisible={startdatemodal}
                  mode="time"
                  onConfirm={handleConfirmStart}
                  onCancel={() => setstartmodalvisible(false)}
                />
                <Text>{moment(startTime).format("h:mm A")}</Text>
                {/* <DateTimePicker
                  value={new Date()}
                  mode="time"
                  display="inline"
                  style={{paddingHorizontal:50 }}
                /> */}
                <Ionicons
                  name="time-outline"
                  style={{ marginLeft: "36%" }}
                  size={22}
                />
              </TouchableOpacity>
            </View>
            <View style={{ width: "45%", marginLeft: "10%" }}>
              <Text style={{ fontWeight: "bold" }}>End Time</Text>
              <TouchableOpacity
                onPress={() => setenddatemodalvisible(true)}
                style={{
                  flexDirection: "row",
                  backgroundColor: "rgba(211, 211, 211, 0.5)",
                  height: 37,
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <DateTimePickerModal
                  isVisible={enddatemodal}
                  mode="time"
                  onConfirm={handleConfirmEnd}
                  onCancel={() => setenddatemodalvisible(false)}
                />
                <Text>{moment(endTime).format("h:mm A")}</Text>
                {/* <DateTimePicker
                value={new Date()}
                mode="time"
                display="inline"
                style={{ paddingHorizontal: 50 }}
              /> */}
                <Ionicons
                  name="time-outline"
                  style={{ marginLeft: "36%" }}
                  size={22}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.fieldtitle}>Remind</Text>
          <RNPickerSelect
            value={remind}
            style={pickerSelectStyles}
            onValueChange={(value) => setRemind(value)}
            items={[
              { label: "10 Minutes early", value: "10" },
              { label: "20 Minutes early", value: "20" },
              { label: "30 Minutes early", value: "30" },
            ]}
          />
          <Text style={styles.fieldtitle}>Repeat</Text>
          <RNPickerSelect
            value={repeat}
            style={pickerSelectStyles}
            onValueChange={(value) => setRepeat(value)}
            items={[
              { label: "Daily", value: "Daily" },
              { label: "Weekly", value: "Weekly" },
              { label: "Monthly", value: "Monthly" },
            ]}
          />
          <Button
            title="Create a Task"
            bottomstyle={{ marginTop: "30%" }}
            onPress={addTaskbtnPress}
          />
        </View>
      </View>
    </View>
  );
};
const pickerSelectStyles = StyleSheet.create({
  inputIOS: { ...styles.field, ...{ color: "black" } },
  inputAndroid: styles.field,
});
export default AddTask;
