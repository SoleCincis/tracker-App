import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

export default function BooksScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //async function is returning a promise , sempre
  const getBooks = async () => {
    try {
      const response = await fetch('https://openlibrary.org/subjects/painting.json');
      const json = await response.json();
      setData(json.works);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);


  const renderItem = ({ item }) => {

    const authors = item.authors.length > 1
      ? `[authors: ${item.authors[0].name} and ${item.authors.length - 1} more]`
      : `[author: ${item.authors[0].name}]`;

    const isbnArray = typeof item.availability === "object" ? item.availability : '' ;
    const isbn = typeof isbnArray.isbn === "string" ? `[ISBN: ${isbnArray.isbn}]` : null ;

    return (
      <View>
        <Text style={styles.item}>
          {item.title} {`\n`}{authors} {isbn}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>

      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          key={({ id }, index) => id}
          renderItem={renderItem}
        />
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#08bece',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});
