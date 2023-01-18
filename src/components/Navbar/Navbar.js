import { Nav,
  NavLink,
  NavMenu,
  Logo,
  NavDropdown,
  NavDropdownContents
} from './Navbar.styled';

function Navbar() {
  return (
    <>
      <Nav>
        <Logo>
            hello
        </Logo>
        <NavMenu>
          <NavLink to='/' >
            Home
          </NavLink>
          <NavDropdown>
          Projects
          <NavDropdownContents>
          <NavLink to='/projects' >
          </NavLink>
          </NavDropdownContents>
          </NavDropdown>
          <NavLink to='/contact' >
            Contact
          </NavLink>
          </NavMenu>        
      </Nav>
      </>
  );
}

export default Navbar;