import Feedback from './components/Feedback'
import './App.css'

export const feedbackData = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://i.postimg.cc/Cxnw6G9V/emoticon-g7e836fe6e-1920.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://i.postimg.cc/YC0xc9x7/emoticon-g74d0caae0-1920.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://i.postimg.cc/Qx9LXXmQ/emoticon-g3bf86972f-1920.png',
    },
  ],
  loveEmojiUrl: 'https://i.postimg.cc/Th8D5dDy/like-g8649f9335-1920.png',
  
}

const App = () => <Feedback feedbackData={feedbackData}/>

export default App