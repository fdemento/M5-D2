import { React }  from 'react'
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import MyNav from './MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>

  );
}

export default App;