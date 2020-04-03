import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import { TextListItem } from './TextListItem';

export class TextList extends React.PureComponent {
  state = {
    listEndReached: false
  };

  keyExtractor = (item, index) => `index${index}-id${item.id}`;

  render() {
    const { listEndReached } = this.state;
    const { data, noSubtitle, icon, leftIcon, noBottomDivider } = this.props;

    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={({ item }) => <TextListItem item={item} noBottomDivider={noBottomDivider} />}
        ListFooterComponent={
          data.length > 10 &&
          !listEndReached && <ActivityIndicator style={{ margin: normalize(14) }} />
        }
        onEndReached={() => this.setState({ listEndReached: true })}
      />
    );
  }
}

TextList.propTypes = {
  data: PropTypes.array,
  leftIcon: PropTypes.bool,
  noSubtitle: PropTypes.bool,
  icon: PropTypes.bool,
  noBottomDivider: PropTypes.bool
};

TextList.defaultProps = {
  noSubtitle: false
};
