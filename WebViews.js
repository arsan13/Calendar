import React from 'react';
import {WebView} from 'react-native-webview';

function WebViews() {
  const uri =
    'http://stackoverflow.com/questions/35531679/react-native-open-links-in-browser';
  return <WebView source={{uri: 'https://gmail.com'}} />;
}

export default WebViews;
