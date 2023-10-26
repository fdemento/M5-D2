import './App.css';
import MyNav from './MyNav';
import MyFooter from './MyFooter'
import AllTheCover from './AllTheCover';

function App() {
  return (
    <div className="App">
      <header>
      <MyNav />
      </header>

      <main>
        <AllTheCover />
      </main>

      <footer>
      <MyFooter />
      </footer>
    </div>
  );
}

export default App;
