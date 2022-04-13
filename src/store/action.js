export const  addTasktoList=(tasks)=>{
    return {
        type: "addtask",
        payload: tasks,
      };
}