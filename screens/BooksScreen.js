import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

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

  //looking for ISBN
  const availabilities =  data.map((book) => {
    return !!book && book.availability
  });

  const isbnArray = availabilities.map((availability)=>{
    console.log("availability.isbn:", availability !== undefined ? availability.isbn : '')
    return availability !== undefined ? availability.isbn : ''
  })
    console.log("isbnArray:", isbnArray)

  const isbn = isbnArray.forEach((isbn) => {
    console.log("ISBN:",  typeof isbn === "string" ? isbn : '')
    return typeof isbn === "string" ? `[ISBN: ${isbn}]` : ''
  })
  console.log("constISBN:", isbn)

  const renderItem = ({ item }) => {

    const authors = item.authors.length > 1
      ? `[authors: ${item.authors[0].name} and ${item.authors.length - 1} more]`
      : `[author: ${item.authors[0].name}]`
      // console.log(item.authors.length)

    return (
      <View>
        <Text style={styles.item}>
          {item.title} {authors} {isbn}
        </Text>

        {/* {isbnArray.forEach(isbn =>
          <Text>
            {typeof isbn === "string" ? isbn : '' }
          </Text>
        )} */}

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
