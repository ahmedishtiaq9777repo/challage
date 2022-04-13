import BaseManager from "./index";
import * as SQLite from "expo-sqlite";
class TasksData {
  constructor() {
    this.db = SQLite.openDatabase("Tasks.db");
  }
  createTaskTable = () => {
    return new Promise((res, rej) => {
      query =
        "CREATE TABLE IF NOT EXISTS Tasks(Id INTEGER PRIMARY KEY  AUTOINCREMENT,title text, deadline date,starttime datetime,endtime datetime,remind text,repeat text,status INTEGER)";

      this.db.transaction((trx) =>
        trx.executeSql(query, [], res, (_, error) => reject(error))
      );
    });
  };
  addTask = (title, deadline, starttime, endTime, remind, repeat, status) => {
    return new Promise((res, rej) => {
      query =
        "INSERT INTO Tasks(title,deadline,starttime,endtime,remind,repeat,status) VALUES('" +
        title +
        "','" +
        deadline +
        "','" +
        starttime +
        "','" +
        endTime +
        "','" +
        remind +
        "','" +
        repeat +
        "',0);";
      this.db.transaction((trx) =>
        trx.executeSql(query, [], res, (_, error) => reject(error))
      );
    });
  };
  updatetask = (id, status) => {
    return new Promise((res, rej) => {
      query = "update Tasks set status='" + status + "' where ID='" + id + "' ";
      this.db.transaction((trx) =>
        trx.executeSql(
          query,
          [],
          (_, result) => res(result),
          (_, error) => rej(error)
        )
      );
    });
  };
  getalltasks = () => {
    return new Promise((res, rej) => {
      query = "select * from Tasks";
      this.db.transaction((trx) =>
        trx.executeSql(
          query,
          [],
          (_, result) => res(result.rows._array),
          (_, error) => rej(error)
        )
      );
    });
  };
  deleteallrecord = () => {
    return new Promise((res, rej) => {
      query = "delete  from   Tasks";
      this.db.transaction((trx) =>
        trx.executeSql(
          query,
          [],
          (_, result) => res(result),
          (_, error) => rej(error)
        )
      );
    });
  };
}
export default TasksData;
