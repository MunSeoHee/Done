import Form from './component/Form'
import Todaydo from './component/Todaydo'
import Todaydoitemlist from'./component/Todaydoitemlist'
import Todaydoitem from'./component/Todaydoitem'
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
import'./style.css';


function App(){
  return (
<Container className="body">
<Todaydo form={<Form value="asasdd"/>}>
  템플릿완성
 <Todaydoitemlist></Todaydoitemlist>
</Todaydo>
</Container>
  );
}

export default App;
