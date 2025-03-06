import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getUsersApi, signUpApi } from '../Services/allApi';


function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [users, setUsers] = useState([]);// Store existing users

const[loginForm, setLoginForm] = useState({
  username:'',
  password:''
})

const[signupForm, setSignupForm] = useState({
  username:'',
  email:'',
  password:''
})

// Fetch users when component mounts
useEffect(() => {
  const fetchUsers = async () => {
    const result = await getUsersApi();
    if (result.status >= 200 && result.status < 300) {
      setUsers(result.data);
    }
  };
  fetchUsers();
}, []);



const signUp=async () => {
  const{username, email, password}=signupForm
  if(!username || !email || !password){
    alert('please enter all details')
  }else{
    const result = await getUsersApi()
    if (result.status >= 200 && result.status < 300) {
      const existingUsers = result.data;

   // Check if username or email already exists
   const userExists = existingUsers.some(user => user.username === username || user.email === email);
   if (userExists) {
     alert('Username or email already exists. Please log in.');
     return;
   }
 }




    const signUpresult = await signUpApi({username, email, password})
    console.log(signUpresult);
    if(signUpresult.status>=200 && signUpresult.status<300){
      alert('signed up successfully')

      // Update local users list
    setUsers([...users, { username, email, password }]);
      handleClose2();
      
    }else{
      alert('something went wrong')
      
    }
  }
}

const login = async()=>{
  const{username, password} = loginForm
  if(!username || !password){
   alert('please enter all details')
  }else{
    const validUser = users.find(user=>user.username===username && user.password===password)
    if(validUser){
      alert('login successfull')
      setLoginForm({ username: '', password: '' })
      handleClose();
    }else{
      alert('incorrect username or password')
      setLoginForm({ username: '', password: '' })
      handleClose();
    }
  }

}



  return (
    <>
    <div className="container-fluid p-0">
    <Navbar collapseOnSelect expand="lg" className="bg-danger">
      <Container>
        <Navbar.Brand href="/"> <h2 className ="fw-bold text-white">SWEAT OFF</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/OurOffers" className="text-white text-capitalize fs-5">Our Offers</Nav.Link>
            <Nav.Link as={Link} to="/PersonalTraining" className="text-white text-capitalize fs-5">Personal Training</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="text-white text-capitalize fs-5">Diet Plans</Nav.Link>
            <button className="rounded px-3 py-1 text-white bg-info border-0 fs-5 mx-4 d-flex mt-md-0 mt-2 justify-content-center align-items-center " onClick={handleShow}> Login</button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form action="" className="border border-secondary p-3 rounded d-flex flex-column">
          <input type="text" value={loginForm.username} onChange={(e)=>setLoginForm({...loginForm, username:e.target.value})} placeholder="Username" className="mt-2 p-2"></input>
          <input type="text" value={loginForm.password} onChange={(e)=>setLoginForm({...loginForm, password:e.target.value})} placeholder="password" className="mt-2 p-2"></input>
          
                
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={login}>
            LOGIN
          </Button>
        </Modal.Footer>
      </Modal>

      {/* second button and modal */}
      <button className="rounded px-3 py-1 text-white bg-info border-0 fs-5 mx-4 d-flex mt-md-0 mt-2 justify-content-center align-items-center  " onClick={handleShow2} >SignUp</button>
            <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>SIGN UP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form action="" className="border border-secondary p-3 rounded d-flex flex-column">
          <input type="text" value={signupForm.username} onChange={(e)=>setSignupForm({...signupForm, username:e.target.value})}placeholder="Username" className="mt-2 p-2"></input>
          <input type="text" value={signupForm.email}  onChange={(e)=>setSignupForm({...signupForm, email:e.target.value})}placeholder="email" className="mt-2 p-2"></input>
          <input type="text" value={signupForm.password} onChange={(e)=>setSignupForm({...signupForm, password:e.target.value})} placeholder="password" className="mt-2 p-2"></input>
                
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={signUp}>
            SIGN UP
          </Button>
        </Modal.Footer>
      </Modal>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   
    </>
  )
}

export default Header