import { UseState } from './UseState';

import './App.css';
import { UseReducer } from './UseReducer';

function App() {
  return (
    <div className="App">
      <UseState name="Use State" />
      <UseReducer name="Use Reducer" />
    </div>
  );
}

export default App;
