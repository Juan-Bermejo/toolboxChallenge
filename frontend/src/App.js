import React from 'react';
import { DataTable } from './components/DataTable';
import { Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


const App = () => {
  return (
    <div>
      <Navbar className='navbar' expand="lg">
        <Container>
          <h1 className='title'>React Test App</h1>
        </Container>
      </Navbar>
        <DataTable />
    </div>
  );
};

export default App;
