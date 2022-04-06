import { type } from "os";

export interface SingleTask{
  Id:number,
  title:string,
  deadline:Date,
  starttime:Date,
  endtime:Date,
  remind:string,
  repeat:string,
  status:number,
}
export interface TaskState{
  taskList:SingleTask[]
}
const initialState={
taskList:[],
};
type action={type:"addtask",payload:string[]}
const MainReducer=(state:TaskState=initialState,action:action)=>{
switch(action.type){
    case "addtask":
        return {
          ...state,
          taskList: action.payload,
        };
}
};
export default MainReducer;