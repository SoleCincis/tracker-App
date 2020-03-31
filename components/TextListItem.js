import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ListItem } from 'react-native-elements';
import { MonoText } from './StyledText';

// import { Touchable } from './Touchable';

// import { Ionicons } from '@expo/vector-icons';

export class TextListItem extends React.PureComponent {
  render() {
    const { noSubtitle, leftIcon, item, icon, noBottomDivider } = this.props;
    const { name, amount, leftIcon: leftIconName } = item;

    return (
      <ListItem
        title={<MonoText>{name}</MonoText>}
        subtitle={<MonoText>{amount}</MonoText>}
        bottomDivider={noBottomDivider ? null : true}
        containerStyle={{ backgroundColor: 'yellow', paddingBottom: 0 }}
      />
    );
  }
}

// const styles = StyleSheet.create({
//   pointsMoneyContainer: {
//     alignSelf: 'flex-start',
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// }); maybe I can use this to have name and amount on the same line

TextListItem.propTypes = {
  item: PropTypes.object.isRequired,
  noSubtitle: PropTypes.bool,
  leftIcon: PropTypes.bool,
  icon: PropTypes.bool,
  noBottomDivider: PropTypes.bool
};

TextListItem.defaultProps = {
  noSubtitle: false
};
