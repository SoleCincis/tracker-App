import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// navigation is a prop in react
export default function BooksScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);

  //async function is always returning a promise
  //The Promise object supports two properties: state and result.
  //While a Promise object is "pending" (working), the result is undefined.
  //When a Promise object is "fulfilled", the result is a value.
  //When a Promise object is "rejected", the result is an error object
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

  // By using this Hook, you tell React that your component needs to do something after render.
  // React will remember the function you passed(we'll refer to it as our “effect”),
  // and call it later after performing the DOM updates.
  useEffect(() => {
    getBooks();
  }, []);

// if limit is a let variable and not a state variable
// +10 behaves in an unexpected way; like this:
// let limit = 10
// limit + 10
// result 1010
  const fetchMoreData = () => {
    setLimit(limit + 10);
    getBooks();
    setLoading(false)
  }


  //Pull-to-refresh is a touchscreen gesture that retrieves
  //all the latest data and updates the currently available data in the app
  // the following is a test
  const pullToRefresh = () => {
    getBooks();// re render would be necessary?
    setData(data.reverse());
    setLoading(false)
  }


  function RenderItem({ item, navigation }) {

    const authors = item.authors.length > 1
      ? `[authors: ${item.authors[0].name} and ${item.authors.length - 1} more]`
      : `[author: ${item.authors[0].name}]`;

    //why the following 2 line of code are no good ?
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

//onEndReached: function called once when the scroll position gets within onEndReachedThreshold
//onEndReachedThreshold: number, a value of 0.5 will trigger onEndReached when the end of
  //the content is within half the visible length of the list.
//ListFooterComponent: component or element, rendered at the bottom of all the items
  //no condition is necessary?
//onRefresh: function, a standard RefreshControl will be added for "Pull to Refresh" functionality
  //make sure to also set the refreshing prop correctly
//refreshing: boolean,set this true while waiting for new data from a refresh

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
