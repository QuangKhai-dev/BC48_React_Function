import logo from './logo.svg';
import './App.css';
import DemoStateAndProps from './Components/DemoStateAndProps/DemoStateAndProps';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl text-center underline bg-red-400">
        Hello world!
      </h1>
      <DemoStateAndProps />
    </div>
  );
}

export default App;
