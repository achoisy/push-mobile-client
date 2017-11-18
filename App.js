import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import MessageList from './src/components/MessageList';


const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Mairie du Vauclin'} />
        <MessageList />
    </View>
);

export default App;
