"use strict";

import {mongoClient} from 'mongodb';
const url = "mongodb://localhost:27017/Sakepedia";


class Mongo {

  static async getCollection() {
      const dbClient=await mongoClient.connect(url,{useNewUrlParser:true});
      return dbClient.db('app_todo').collection('todo');
    };

  static async insetData(data) {
    return new Process((resolve, reject) => {

    })
  }

  static selectData() {

  }

  static() {

  }

};

export default Mongo;