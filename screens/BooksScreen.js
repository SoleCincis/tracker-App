import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function BooksScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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

  const authorName = data.map((e) => {
    e.authors.map((author) => {
      console.log(author.name)
      return author.name
    })
     });

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : (

      <FlatList
          data={data}
          key={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title} [authors: { item.authors[0].name } and {item.authors.length - 1} more authors]
            </Text>
          )}
        />

      )}
    </View>
  );
};
