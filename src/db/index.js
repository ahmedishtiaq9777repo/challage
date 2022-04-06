import React from "react";
import * as SQLite from 'expo-sqlite';
export default class BaseManager {
    constructor() {}
  
    GetSqLiteInstance() {
      return new Promise((res, rej) => {
        this.sqlite = SQLite;
        
     
        this.sqlite
          .openDatabase('Tasks.db')
          .then((db) => {
            res(db);
          })
          .catch((error) => {
            rej(error);
          });
      });
    }
  };

  