import logo from './logo.svg';
import './App.css';
import One from './component/One';
import Split from 'react-split'
import Two from './component/Two';
import Three from './component/Three';
function App() {
  return (
    <Split direction='vertical' style={{ height:'100vh' }}>
        <Split  className='flex flex-grow'>
          {/* <div className='bg-gray-300 '></div> */}
          <One/>
          {/* <div className='bg-gray-300 '></div> */}
          <Two/>
          
        </Split>
        {/* <div className='bg-gray-400'></div> */}
        <Three />
      </Split>
  );
}

export default App;
