
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Post1 from './components/Post1/Post1';
import Post2 from './components/Post2/Post2';
import Post3 from './components/Post3/Post3';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Post1 />
        <Post2 />
        <Post3 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
