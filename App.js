import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import React from "react";

export default function App() {
  const [enteredGoal, setenteredGoal] = useState("");

  const [addCourse, setaddCourse] = useState([]);

  function goalInputHandler(enteredText) {
    setenteredGoal(enteredText);
  }

  function addHandler() {
    setaddCourse((currentCourse) => [...currentCourse, enteredGoal]);
  }

  return (
    <Scrol lView>
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your name"
          onChangeText={goalInputHandler}
        />
        <Button title="ADD" onPress={addHandler} />
      </View>
      <View>
        {addCourse.map((goal) => (
          <View key={goal} style={styles.styleList}>
            <Text style={{color: 'white'}} >{goal}</Text>
          </View>
        ))}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 16,
    paddingTop:50,
    flex:1
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    marginBottom: 16,
    borderBottomWidth:1,



  },
  inputBox: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    padding:10 ,
  },

  styleList: {
    flex: 4,
    padding: 10,
    marginVertical:10,
    color: "white",
    backgroundColor: "#ccc",
    borderRadius:6,
    borderColor: "black",
    backgroundColor: "#5e0acc",
    borderWidth: 1,
  },
});
