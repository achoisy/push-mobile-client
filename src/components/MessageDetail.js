import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './button';

const MessageDetail = ({ message }) => {
  const {
    headings,
    contents,
    links,
    sender,
  } = message;

  const {
    thumbnailStyle,
    headerContenStyle,
    thumbnailContainerStyle,
    headerTexstyle,
    imageStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContenStyle}>
          <Text style={headerTexstyle}>{headings.fr}</Text>
          <Text>{contents.fr}</Text>
        </View>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: sender.logo }}
          />
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: sender.logo }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL("http://ville-vauclin.fr/")}>
          Partager
        </Button>
      </CardSection>
  </Card>
);
};

const styles = {
  headerContenStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTexstyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default MessageDetail;
