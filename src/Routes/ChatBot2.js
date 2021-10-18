import React from 'react'
import ChatBot from 'react-simple-chatbot';
import '../Styles/Chatbot.css'


function Config() {
  return (
    <div className="App">
    
     
   <div className="App-header">
      <ChatBot
    steps={[
      {
        id: 'name',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi nice metting you {previousValue}! ',
        trigger: '4',
      },
      {
        id: '4',
        message: ' how can i help you! ',
        trigger: '5',
      },
      {
        id: '5',
        user: true,
        trigger: '6',
      },
      
      {
        id: '6',
        message: 'sorry ',
        trigger: '7',
      },
      /* {
        id: '7',
        Options:[
          {
            value:'yes',label:'yes',trigger:'8'
          },
          {
            value:'no',label:'no',trigger:'9'
          }

        ]
        
      }, */
      {
        id: '7',
        message: 'u choose yes ',
        trigger: '10',
      },
      {
        id: '9',
        message: 'u choose no ',
        trigger: '10',
      },
      
      {
        id: '10',
        message: 'ok',
        end: true,
        
      },
    ]}
  />
</div>
    </div>
  )
}

export default Config
