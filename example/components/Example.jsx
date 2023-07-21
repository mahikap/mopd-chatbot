import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

const steps = [
  {
    id: '1',
    message: 'Hi, what is your name?',
    trigger: 2
  },
  {
    id: '2',
    user: true,
    trigger: '3'
  },
  {
    id: '3',
    message: 'Hi {previousValue}, how can I help you?',
    trigger: '4'
  },
  {
    id: '4',
    user: true
  }
];

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
      <React.StrictMode>
        <ChatBot steps={steps} 
                headerTitle="MOPD Chatbot" 
                speechSynthesis={{ enable: true, lang: 'en' }}/>
      </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
