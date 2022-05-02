import {View, Text, StyleSheet, TextInput, Button, Modal, Image} from 'react-native';
import {useState} from 'react';
function GoalInput(props){
  const [goalText, setGoalText] = useState('');

  function textOnChange(text){
    setGoalText(text);
  }

  function addGoal(){
    props.setAlertMessage('');
    const validate = addValidation();
    if(validate == true){
      props.addGoal(goalText);
      setGoalText('');
    }else{
      props.setAlertMessage('Goal must not be empty');
    }
  }

  function addValidation(){
    return goalText===undefined || goalText===''? false : true;
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={{flex:1}}>
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')}/>
            <TextInput onChangeText={textOnChange} style={styles.textInput} placeholder='Your course goal' value={goalText}/>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button onPress={addGoal} color='#b180f0' title='Add Goal'/>
              </View>
              <View style={styles.button}>
                <Button onPress={props.onCancel} color='#f31282' title='Cancel'/>
              </View>
            </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer:{
    flex:1,
    padding:16,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#311b6b'
  }, 
  textInput:{
    borderWidth:1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius:6, 
    width:'100%',
    color:'#120438',
    padding:16
  },
  buttonContainer:{
    marginTop:8,
    flexDirection:'row'
  },
  button:{
    width:'30%',
    marginHorizontal:8
  },
  image:{
    width:100,
    height:100,
    margin:20
  }
})