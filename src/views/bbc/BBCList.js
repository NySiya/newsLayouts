import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class BBCList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { container } = styles;
    return (
      <ScrollView style={container}>
        
      </ScrollView>
    );
  };
};

const styles = {
  container: {
    flex: 1;
  },
};

export default BBCList;
