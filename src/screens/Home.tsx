import React from "react";
import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>사례 보기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>산재 신청하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: 250,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#25B10E',
    borderWidth:2,
    borderColor: 'white',
    padding: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'NanumSquareNeo-cBd',
    fontSize: 16,
    marginTop: 5
  }

})