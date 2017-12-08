import React, { Component } from 'react';
import { Header, Left, Body, Right, Title, Icon, Button, Thumbnail } from 'native-base';
import { View, Text, Image, Linking } from 'react-native';

class HeaderSection extends Component {

  render() {
    return (
      <Header>
          <View style={styles.thumbnailContainerStyle}>
            <Thumbnail small source={{ uri: 'https://res.cloudinary.com/monmagazine-fr/image/upload/v1512573083/wwe4lcas67xxijfkrz1s.png' }} />
          </View>
          <View style={styles.headerContenStyle}>
            <Text style={styles.headerTexstyle}>Maire du Vauclin</Text>
            <Text>Recu a 12:35</Text>
          </View>
          <Right>
            <Button transparent>
              <Icon name='ios-call' />
            </Button>
            <Button transparent>
              <Icon name='ios-menu' />
            </Button>
          </Right>
        </Header>
    );
  }
}

const styles = {
  tumbnailStyle: {
    padding: 20,
  },
  headerContenStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTexstyle: {
    fontSize: 16
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
  },
};

export default HeaderSection;
