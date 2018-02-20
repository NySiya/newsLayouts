import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      providerStyle
    } = defaultStyles;

    return(
      <ScrollView style={providerStyle}>
        <Text>This is SideBar</Text>
      </ScrollView>
    )
  };
}

const defaultStyles = {
  providerStyle: {
    flex: 1,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
};

export default SideBar;
