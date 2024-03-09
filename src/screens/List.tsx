import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`YOUR_API_ENDPOINT?query=${searchText}`);
      const data = await response.json();

      setSearchResults(data.results); // 여기서 results는 서버 응답에서 실제 검색 결과를 담고 있는 키일 수 있습니다.
    } catch (error) {
      console.error('검색 오류:', error);
    }
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        onChangeText={setSearchText}
        value={searchText}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>검색</Text>
      </TouchableOpacity>
      </View>
      <View>
      <FlatList
        style={styles.resultList}
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#25B10E',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#25B10E',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  resultList: {
    flex: 1,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default SearchBar;
