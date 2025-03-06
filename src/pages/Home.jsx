import React from 'react'
import { Button, Card, Carousel, Form } from 'react-bootstrap'


function Home() {
  return (
    <>
     <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-3 p-md-5" style={{backgroundColor:"#3a3a3a", height:"400px",backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/025/863/486/non_2x/bearded-athlete-runs-showcasing-endurance-in-scenic-landscape-near-river-dressed-in-active-wear-fitness-and-workout-concept-photo.JPG')", backgroundSize: "cover",
       backgroundPosition: "center",
       backgroundRepeat: "no-repeat"}}>
      <h1 className="text-white text-uppercase fs-bold">Are you ready!!</h1>
        <p className="text-center text-white fs-4 p-md-5">Struggling to lose weight, get fit, and have tried several weight loss programs, different workouts, and applied all the advice you’ve gotten from those so-called fitness gurus and have yet to see any results?</p>
        
      </div>
    <div className="container mt-5 justify-content-center">
      {/* <div className="row">
        <div className="col-md-6">
<Form className="d-flex">
  <Form.Control type = "text" placeholder="Enter Location" className="me=2 search-input bg-white border-1">
  </Form.Control>
  <Form.Control type = "text" placeholder="Search for Doctors, clinincs..." className="me=2 border search-input bg-white border-1">
  </Form.Control>
</Form>


        </div>
        <div className="col-md-6">

        </div>
      </div> */}
     
    </div>
    <div className="container mt-5">
      <div className="row mt-5 py-5 d-flex justify-content-center">
        {/* <div className="col-md-2"></div> */}
        <div className="col-12 col-md-8 d-flex flex-column flex-md-row justify-content-center gap-md-4 align-items-center">
        <Card style={{ width: '260px', height:'400px' }} className="rounded shadow" >
      <Card.Img variant="top" className="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgYuG4qUFYA68auMl9RtWLeaI1TuuaPB9YxA&s" style={{height:"180px"}} />
      <Card.Body>
        <Card.Title>Our Offers</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi eveniet aliquid voluptatum temporibus accusantium expedita voluptates dolor atque quas.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '260px', height:'400px' }} className="rounded shadow">
      <Card.Img variant="top" className="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1KGcauvZ11hc72ZspxZLieKYN-cGlbAJ2lQ&s " style={{height:"180px"}}/>
      <Card.Body>
        <Card.Title>Personal training</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem aperiam dolorem? Veniam, eaque ipsa.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <Card style={{ width: '260px', height:'400px' }} className="rounded shadow">
      <Card.Img variant="top" className="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3gdpBV0ve7Bc3mz1rfrWUjX2MFvpzFTKKQ&s" style={{height:"180px"}} />
      <Card.Body>
        <Card.Title>DIET PLANS</Card.Title>
        <Card.Text>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor, fuga officiis excepturi corrupti reiciendis unde veritatis cum modi similique.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    
        </div>
        {/* <div className="col-md-2"></div> */}
      </div>
    </div>
    <div className="container mt-5">
    <div className="row mt-5 py-5 d-flex justify-content-center">
<div className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-center gap-md-4 align-items-center">
<img 
    src="https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_1280.jpg" 
    alt="Sample Image" 
    className="w-100 rounded" 
    style={{ objectFit: "cover", height:"500px" }} 
  />
    </div>
    <div className="col-12 col-md-6 d-flex flex-column  justify-content-center gap-md-4 align-items-center">
<h4 className="text-capitalize text-danger fs-1 mt-3">Here We go</h4>
<p className="text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo doloribus numquam ad saepe iste incidunt eos suscipit maxime nemo eum esse repudiandae sapiente ullam eligendi dolorum delectus sequi, ipsam id. Error placeat harum, consectetur quos eos dolor, explicabo rerum et minus provident ipsam odio. Eius reiciendis sed neque est Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quos enim ex cupiditate illo fuga deserunt nemo sit possimus saepe.</p>
    </div>
    
    

    </div>

    </div>
    
        
    </>
  )
}

export default Home
