import './App.css';
import { Fragment } from 'react';
import Home from './student/Home';
import AddStudent from './admin/AddStudent';
import AdminButton from './admin/AdminButton';
import Result from './student/Result';



function App() {
  return (
    <Fragment>
      <Result/>
    </Fragment>
  ); 
}

export default App;
