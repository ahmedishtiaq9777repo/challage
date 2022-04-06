import React, { useEffect, useRef, useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import Button from "../components/Button";
import Header from "../components/HomeHeader";
import styles from "../../Style";
import { useSelector, useDispatch } from "react-redux";
import { addTasktoList } from "../store/action";
import Task from "../components/Task";
import TasksData from "../db/dbStorage";
import { TaskState,SingleTask } from "../store/reducer";
const Home = (props) => {
  const allTasks = useSelector<TaskState,TaskState['taskList']>((state) => state?.taskList);
  const allTasksRef = useRef(allTasks);
  allTasksRef.current = allTasks;
 
  const dispatch = useDispatch();
  const localdb = new TasksData();
  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      // // console.log("navcount",countref.current);

      try {
          localdb.createTaskTable().then((res)=>{


            localdb
            .getalltasks()
            .then((records) => {
              console.log("records:", records);
              dispatch(addTasktoList(records));
            })
            .catch((error) => {
              console.log("error:", error);
            });



          }).catch((error)=>{
console.log("error:",error);
          });
       
      } catch (error) {
        console.log("error:", error);
      }

    });
    return unsubscribe;
  }, [props.navigation]);

  const onPressCheckboxComplete = (item) => {
    // console.log("item:Complete:", item);
  };
  const onPressCheckboxPending = (item:SingleTask) => {
    console.log("item:pending:", item);
    console.log("alltasks:", allTasksRef.current);
    let temptasks = [...allTasksRef.current];

    for (const obj of temptasks) {
      if (obj.Id == item.Id) {
        obj.status = 1;

        break;
      }
    }
    localdb
      .updatetask(item.Id, 1)
      .then((res) => {
        console.log("updated:", res);
        if(res.rowsAffected)
        {
            console.log("updated");
        }
      })
      .catch((error) => {
        console.log("error update:", error);
      });
    dispatch(addTasktoList(temptasks));
  };

  const onPressAddTask = () => {
    props.navigation.navigate("AddTaskScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainScreen}>
        
        <Header title="To-Do App" rightView={true} />
        <ScrollView>
        <Text style={[styles.marginHorizontal, styles.taskheading]}>
          Completed Tasks
        </Text>
        {allTasksRef.current != undefined
          ? allTasksRef.current
              .filter((a) => a.status == 1)
              .map((item) => {
                return (
                  <Task
                    key={item.Id}
                    item={item}
                    onPressCheckbox={onPressCheckboxComplete}
                  />
                );
              })
          : null}
        <Text style={[styles.marginHorizontal, styles.taskheading]}>
          Pending Tasks
        </Text>
        <View style={styles.marginBottompending}>
        {allTasksRef.current != undefined
          ? allTasksRef.current
              .filter((a) => a.status == 0)
              .map((item) => {
                return (
                  <Task
                    key={item.Id}
                    item={item}
                    onPressCheckbox={onPressCheckboxPending}
                  />
                );
              })
          : null}
          </View>
  </ScrollView>
        <View style={styles.buttonView}>
          <Button
            onPress={onPressAddTask}
            title="Add the task"
            bottomstyle={styles.bottomstyle}
          />
          
        </View>
      
      </View>
    </View>
  );
};
export default Home;
