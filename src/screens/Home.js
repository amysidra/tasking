import { 
    Text, 
    View, 
    StatusBar, 
    FlatList
  } from "react-native";
  import React, {useState} from "react";
  import { Taskinput, Task, ModalEditTask } from "../components";
  
  export default function Home() {
    const [modalVisible, setModalVisible] = useState(false)
    const [tasks, setTasks] = useState([])
    // const [value, setValue] = useState('')
  
    // bikin task baru
    const [newTask, setNewTask] = useState('')
    function createTask () {
      setTasks((tasks) => {
        return [{title: newTask, id: tasks.length + 1}, ...tasks]   // array baru ditambhakan paling depan
      })
      setNewTask('')  // mengkosongkan input setelah tugas selesai
    }
  
    // delete task
    function deleteTask (id) {
      setTasks((tasks) => {
        return tasks.filter(tasks => tasks.id != id )
      })
    }
  
    // edit task
    const [editedTask, setEditedTask] = useState({
      title: '',
      done: false,
      id: null
    })
  
    function editTask () {
      setTasks(tasks => {
        return tasks.map ( task => 
          task.id == editedTask.id ? {...task, title: editedTask.title} : task)
      })
      setModalVisible(false)
    }
  
    function checkTask (selectedId) {
      setTasks(tasks => {
        return tasks.map(task =>
          task.id == selectedId ? {...task, done: !task.done} : task,
        )
      })
    }
  
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'#330074'}/>
        
        {/* input tugas */}
        <Taskinput 
          onChangeText={setNewTask}
          value={newTask}
          onPress={createTask}
          disabled={newTask == ''}
        />
  
        {/* render tugas */}
        <FlatList 
          data={tasks}
          ListEmptyComponent={() => <Text style={{textAlign: 'center'}}>Tidak ada tugas</Text>}
          renderItem={({item:task}) => {
            return (<Task 
              task={task}
              onPressCheck={() => checkTask(task.id)}
              onPressDelete={() => deleteTask(task.id)}
              onPressEdit={() => {
                setModalVisible(true);
                setEditedTask(task);
              }} />
            )
          }}
        />
  
        {/* Modal edit tugas */}
        <ModalEditTask 
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          onBackdropPress={() => setModalVisible(false)}
          onPressClose={() => setModalVisible(false)}
          inputValue={editTask.title}
          onChangeText={taskTitle => setEditedTask({...editedTask, title: taskTitle })}
          onPressEdit={editTask}
        />
      </View>
    )
  }