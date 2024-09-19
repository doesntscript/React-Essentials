

import reactImg from './assets/..';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <>
    <header>
        <img src={reactImg} alt="" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
        </p>
      </header>
    </>
  )
}


function App() {
  

  return (
    <>
    <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    
    </>
  )
}

export default App
