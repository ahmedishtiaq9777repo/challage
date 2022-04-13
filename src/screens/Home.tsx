import React, { useEffect, useRef, useState } from "react";
import { View, Text, Pressable, ScrollView, SafeAreaView } from "react-native";
import Button from "../components/Button";
import Header from "../components/HomeHeader";
import styles from "../../Style";
import { useSelector, useDispatch } from "react-redux";
import { addTasktoList } from "../store/action";
import TasksData from "../db/dbStorage";
import { TaskState, SingleTask } from "../store/reducer";
import { useToast } from "native-base";
import NavigationService from "../services/services";
import FilterTask from "../components/FilterTask";
const Home = (props) => {
  const allTasks = useSelector<TaskState, TaskState['taskList']>((state) => state?.taskList);
  const allTasksRef = useRef(allTasks);
  allTasksRef.current = allTasks;

  const dispatch = useDispatch();
  const localdb = new TasksData();
  const toast = useToast();
  useEffect(() => {

    NavigationService(props.navigation, dispatch, localdb, toast);

  }, []);





  const onPressCheckboxPending = (item: SingleTask) => {

    let temptasks = [...allTasksRef.current];

    for (const obj of temptasks) {
      if (obj.Id == item.Id) {
        obj.status = 1;

        break;
      }
    }
    try {
      localdb
        .updatetask(item.Id, 1)


      dispatch(addTasktoList(temptasks));
    } catch (error) {
      toast.show({ title: error });
    }

  };

  const onPressAddTask = () => props.navigation.navigate("AddTaskScreen");


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainScreen}>

        <Header title="To-Do App" rightView={true} />

        <Text style={[styles.marginHorizontal, styles.taskheading]}>
          Completed Tasks
        </Text>
        <View style={styles.heightcompleteView}>
          {allTasksRef.current != undefined
            ? <FilterTask alltasks={allTasksRef.current} status={1} />
            : null}
        </View>
        <Text style={[styles.marginHorizontal, styles.taskheading]}>
          Pending Tasks
        </Text>
        <View style={styles.heightpendingView}>
          {allTasksRef.current != undefined
            ? <FilterTask alltasks={allTasksRef.current} status={0} onPressCheckboxPending={onPressCheckboxPending} />
            : null}
        </View>

        <View style={styles.buttonView}>
          <Button
            onPress={onPressAddTask}
            title="Add the task"
            bottomstyle={styles.bottomstyle}
          />

        </View>

      </View>
    </SafeAreaView>
  );
};
export default Home;
