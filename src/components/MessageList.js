import React, { Component } from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import PouchDB from 'pouchdb-react-native';
import _ from 'lodash';
// import axios from 'axios';
import OneSignal from 'react-native-onesignal';
import MessageDetail from './MessageDetail';


const localDB = new PouchDB('message');
const remoteDB = new PouchDB('http://192.168.1.5:5984/message');

//TODO: set only one time
OneSignal.sendTag('test99999', 'true');
OneSignal.getTags((receivedTags) => {
    console.log(receivedTags);
});
// Delete a tag
// OneSignal.deleteTag("coderef");

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = { messages: [] };
    // this.setState(getUserToken());
  }

  componentWillMount() {
    remoteDB.replicate.to(localDB, {
      live: true,
      retry: true,
      filter: doc => doc.coderef === 'test99999',
      // TODO: add since to limit replication
    })
    .on('paused', (info) => {
      // replication was paused, usually because of a lost connection
      console.log('Paused', info);
    })
    .on('active', (info) => {
      // replication was resumed
      console.log('active', info);
    })
    .on('change', (change) => {
      // yo, something changed!
      console.log('change:', change);
    })
    .on('error', (err) => {
      // yo, we got an error! (maybe the user went offline?)
      console.log('err', err);
    });
  }

  componentDidMount() {
    localDB.changes({
      live: true,
      include_docs: true //Include all fields in the doc field
    }).on('change', this.handleChange.bind(this));

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('registered', this.onRegistered);
    OneSignal.addEventListener('ids', this.onIds);
  }

  handleChange(change) {
    const message = change.doc;

    if (!message) {
      return;
    }

    if (message._deleted) {
      this.removeDoc(message);
    } else {
      this.addDoc(message);
    }
  }

  addDoc(newMessage) {
    this.setState({
      messages: _.concat(this.state.messages, newMessage)
    });
  }

  removeDoc(oldMessage) {
    this.setState({
      messages: this.state.messages.filter(message => message._id !== oldMessage._id)
    });
  }

  renderMessages() {
    console.log('this.state.messages:', this.state.messages);
    return _.reverse(this.state.messages).map(message =>
      <MessageDetail key={message._id} message={message} />
    );
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onRegistered(notifData) {
    console.log("Device had been registered for push notifications!", notifData);
  }

  onIds(device) {
  console.log('Device info: ', device);
  }

  render() {
    return (
      <ScrollView>
        {this.renderMessages()}
      </ScrollView>
    );
  }
}

export default MessageList;
