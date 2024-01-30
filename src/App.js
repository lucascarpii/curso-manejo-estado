import { UseState } from './UseState';
import { ClassState } from './ClassState';

import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="Use State" />
      <ClassState name="Class State" />
    </div>
  );
}

export default App;
