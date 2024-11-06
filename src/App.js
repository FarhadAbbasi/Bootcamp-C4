import './App.css';
import Room from './Room';

function App() {
  return (
    <div className="App">
          This is App component. Let's check Rooms. <br/>
          <Room></Room>
         
        <br/>
        <a // I kept this heperlink of 'Learn React' because otherwise I was getting an error in Github app deployment regarding rendering /learn react/ in 'App.test.js' component. 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
