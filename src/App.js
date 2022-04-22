import Header from './components/Header'
import Meme from './components/Meme'
import React from 'react'

function App() {
  const [memes, setMemes] = React.useState([]);
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    url: 'https://i.imgflip.com/1g8my4.jpg'
  })

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
       .then(res => res.json())
       .then(data => setMemes(data.data.memes))
  }, [])

  function handleChange(e) {
    const {name, value} = e.target;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  function getMeme(e) {
    e.preventDefault();
    let randomNum = Math.floor(Math.random() * memes.length);
    let memeImg = memes[randomNum].url;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        url: memeImg
      }
    })
  }
  return (
    <div className="App">
       <Header />
       <Meme handleChange={handleChange} topText={meme.topText} bottomText={meme.bottomText} img={meme.url} getMeme={getMeme} />
    </div>
  );
}

export default App;
