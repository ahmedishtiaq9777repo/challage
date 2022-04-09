import React from 'react';
import Task from './Task';

const FilterTask = (props) => {

    if (props.status) {
        return (props.alltasks
            .filter((a) => a.status == 1)
            .map((item) => {
                return (
                    <Task
                        key={item.Id}
                        item={item}

                    />
                );
            }));
    } else {
        return (
            props.alltasks
                .filter((a) => a.status == 0)
                .map((item) => {
                    return (
                        <Task
                            key={item.Id}
                            item={item}
                            onPressCheckbox={props.onPressCheckboxPending}
                        />
                    );
                })
        );
    }
};
export default FilterTask;