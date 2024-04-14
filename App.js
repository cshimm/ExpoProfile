import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, useState } from 'react-native';
import React from 'react'

export default function App() {
  const [nameText, setNameText] = React.useState('')
  const [comment, setComment] = React.useState('')
  return (
    <ScrollView style={styles.app}>
      <View style={styles.header}>
        <Text>Header</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.centered}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          />
        </View>
        <ScrollView style={styles.scrollView}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
      <TextInput
        style={styles.input}
        onChangeText={setNameText}
        value={nameText}
        placeholder="enter name..."
      />
        <TextInput
        style={styles.input}
        onChangeText={setComment}
        value={comment}
        placeholder="enter comment..."
      />
    <Text>Submit</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app:{
    flex:1,
    justifyContent:'space-evenly',
    width:"100%",
  },
  header:{
    flex:1,
    justifyContent:'flex-end',
    backgroundColor:"#ff1",
    width:'100%',
    height:40,
    alignItems:'center'
  },
  centered: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  img: {
    height: 50,
    width: 50,
    margin:'auto'
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
