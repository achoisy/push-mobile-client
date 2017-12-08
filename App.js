import React from 'react';
import { Container } from 'native-base';
import Header from './src/components/header';
import MessageList from './src/components/MessageList';
import Footer from './src/components/footer';


const App = () => (
  <Container>
    <Header headerText={'Mairie du Vauclin'} />
    <MessageList />
    <Footer />
  </Container>
);

export default App;
