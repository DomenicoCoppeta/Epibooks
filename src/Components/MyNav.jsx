import { Container, Nav, Navbar, Form, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar({searchTerm, setSearchTerm, theme, setTheme}) {
  return (
    <Navbar expand="lg" className={ 
      `fixed-top ${theme === 'light' ? 'bg-light border-bottom' : 'bg-dark border-bottom border-light'}`}
      variant={theme}>
      <Container>
        <Navbar.Brand href="#">Epibooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/'>Home</Link>
          </Nav>
          <Form.Group controlId="rating" className='me-3' >
                <Form.Control
                    className ='me-5'
                    type='search'
                    placeholder='Search for your book'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}/>
          </Form.Group>
        <Button
              className='rounded-circle'
              variant = {theme === 'dark' ? 'dark' : 'light'}
              type="button"
              id="theme-switch"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >{theme=== 'light' ? <i className="bi bi-moon-stars-fill"></i>  : <i className="bi bi-brightness-high-fill"></i>}
        </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
