import { useState } from 'react';
import Child from './Child';
const App = () => {
  const [name, setName] = useState();
  const changeName = (name) => setName(name);

  return (
    <div>
      <h1>my name is {name}</h1>
      <Child cName={changeName} />
    </div>
  );
};

export default App;
