import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      providerStyle
    } = defaultStyles;
    const { navigate } = this.props.navigation;

    return(
      <ScrollView style={providerStyle}>
        <Text>This is home page</Text>
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

Home.navigationOptions = ({ navigation }) => ({
  title: 'Welcome',
  headerLeft: (
    <Icon
      onPress={() => navigation.navigate('DrawerToggle') }
      style={{ marginLeft: 16, marginRight: 16 }}
      name='menu'
      color='#fff'
      size={32}
    />
  ),
  headerRight: <View />
});

export default Home;
