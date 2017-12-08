import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

class FooterSection extends Component {

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name="md-share" />
            <Text>Partager</Text>
          </Button>
          <Button vertical>
            <Icon name="ios-download-outline" />
            <Text>Enregistrer</Text>
          </Button>
          <Button vertical>
            <Icon active name="ios-trash-outline" />
            <Text>Supprimer</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }

}

export default FooterSection;
