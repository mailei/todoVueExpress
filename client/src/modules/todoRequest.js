import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class todoRequest{
  
  static getTodo(){
    return new Promise(async (resulve,reject)=>{
      try{
        const res=await axios.get(url);
        const data=res.data;
        resulve(
          data.map(todo=>({
            ...todo,
            createAt: new Date(todo.createAt)
            })
          ));
      }catch(error){
        reject(error);
      }
    });
  }

  static createTodo(text){
    return axios.post(url,{
      text
    });
  }

  static deleteTodo(id){
    return axios.delete(`${url}${id}`);
  }

}
export default todoRequest;