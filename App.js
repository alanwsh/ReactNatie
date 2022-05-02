import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, FlatList, Button} from 'react-native';
import { useState, useEffect } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Toast from 'react-native-toast-message';

export default function App() {
  // const toast = useToast();
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  const [message, setMessage] = useState('');
  
  function addGoal(goalText){
    setGoals(currentGoals => [...goals,{text:goalText,id:Math.random().toString()}]);
    hideModal();
  };

  function showModal(){
    setModalVisible(true);
  }

  function hideModal(){
    setModalVisible(false);
  }
  function deleteGoal(id){
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  }
  function setAlertMessage(text){
    // let nofication = toast.show(text, {
    //   type: "danger",
    //   placement: "bottom",
    //   duration: 4000,
    //   offset: 30,
    //   animationType: "slide-in",
    // });

  }
  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='Add New Goal'color='#a065ec' onPress={showModal}/>
        <GoalInput visible={modalVisible} setAlertMessage={setAlertMessage} addGoal={addGoal} onCancel={hideModal}/>
        <View style={styles.goalsContainer}>
          <FlatList keyExtractor={(item,index) => {
            return item.id;
          }} data={goals} renderItem={(itemData) => {
            return (
              <GoalItem id={itemData.item.id} onDelete={deleteGoal} text={itemData.item.text}/>
            );
          }}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop:50,
    paddingHorizontal:16,
    flex:1,
  },
  goalsContainer:{
    flex:5
  },
  notification:{
    backgroundColor:'#FC5949',
    margin:8,
    padding:8,
    borderRadius:6
  }
});
  