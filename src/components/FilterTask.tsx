import React from 'react';
import { FlatList } from 'react-native';
import styles from '../../Style';
import Task from './Task';



const FilterTask = (props) => {
    const { alltasks, status } = props;
    const onPressCheckboxPending = props?.onPressCheckboxPending;
    const filteredtasks = alltasks.filter(a => a.status == status);


    const renderTaskPending = ({ item, index }) => {
        return (
            <Task
                item={item}
                onPressCheckbox={onPressCheckboxPending}

            />
        );
    };
    const renderTaskCompleted = ({ item, index }) => {
        return (
            <Task
           
                item={item}


            />
        );
    };
    if (status) {
        return (
            <FlatList data={filteredtasks} renderItem={renderTaskCompleted} keyExtractor={(item,index)=>item.Id} />
        );

    } else {
        return (
            <FlatList data={filteredtasks} style={styles.marginBottomPerC} renderItem={renderTaskPending} keyExtractor={(item,index)=>item.Id} />
        );
    }


};
export default FilterTask;