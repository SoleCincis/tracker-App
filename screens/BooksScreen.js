import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function BooksScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);

  //async function is always returning a promise
  const getBooks = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/subjects/painting.json?limit=${limit}`);
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


  const fetchMoreData = () => {
    setLimit(limit + 10);
    getBooks();
    setLoading(false)
  }


  //Pull-to-refresh is a touchscreen gesture that retrieves
  //all the latest data and updates the currently available data in the app
  const pullToRefresh = () => {
    getBooks();// re render would be necessary
    setData(data.reverse());
    setLoading(false)
  }


  function RenderItem({ item, navigation }) {

    const authors = item.authors.length > 1
      ? `[authors: ${item.authors[0].name} and ${item.authors.length - 1} more]`
      : `[author: ${item.authors[0].name}]`;

    const isbnArray = typeof item.availability === "object" ? item.availability : '' ;
    const isbn = typeof isbnArray.isbn === "string" ? `[ISBN: ${isbnArray.isbn}]` : null ;

    return (
      <View>
        <TouchableOpacity onPress={() => navigation.push('Detail', item )}>
          <Text style={styles.item}>
            {item.title} {`\n`}{authors} {isbn}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (

    <View style={{ flex: 1, padding: 24 }}>

      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          key={({ id }, index) => id}
          renderItem={({ item }) => <RenderItem item={item} navigation={navigation} />}
          onEndReached={fetchMoreData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={<ActivityIndicator />}
          onRefresh={getBooks}
          refreshing={isLoading}
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
