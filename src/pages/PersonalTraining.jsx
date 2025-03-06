import React from 'react'

function Surgeries() {
  return (
    <>
       <div className="container mt-5">
    <div className="row mt-5 py-5 d-flex justify-content-center">
<div className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-center gap-md-4 align-items-center">
<img 
    src="https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_1280.jpg" 
    alt="Sample Image" 
    className="w-100 rounded " 
    style={{ objectFit: "cover", height:"400px" }} 
  />
    </div>
    <div className="col-12 col-md-6 d-flex flex-column  justify-content-center gap-md-4 align-items-center">
<h4 className="text-capitalize text-danger fs-1 mt-3">Training Details</h4>
<p className="text-black text-center text-md-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo doloribus numquam ad saepe iste incidunt eos suscipit maxime nemo eum esse repudiandae sapiente ullam eligendi dolorum delectus sequi, ipsam id. Error placeat harum, consectetur quos eos dolor, explicabo rerum et minus provident ipsam odio. Eius reiciendis sed neque est Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quos enim ex cupiditate illo fuga deserunt nemo sit possimus saepe.</p>
    </div>
    
    

    </div>

    </div>
    <div className="container mt-5">
      <div className="row mt-5 d-flex justify-content-center">
        
      <div className="col-12 col-md-4 d-flex flex-column flex-md-row justify-content-center gap-md-4 align-items-center ">
          <div className="p-4 text-center rounded text-white" style={{backgroundColor:"#801817"}}>
            <h3 className="mb-3 text-black">Personal training</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at laboriosam porro quaerat qui, ut praesentium eos optio incidunt dolorem ipsa facilis ab fuga magnam fugiat repellendus aspernatur distinctio. Minima eius quibusdam quidem tenetur aliquam perspiciatis ipsam alias nulla quos.</p>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column flex-md-row justify-content-center gap-md-4 align-items-center mt-md-0 mt-3">
          <div className="p-4 text-center rounded text-white" style={{backgroundColor:"#000"}}>
            <h3 className="mb-3 text-white">Online training</h3>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at laboriosam porro quaerat qui, ut praesentium eos optio incidunt dolorem ipsa facilis ab fuga magnam fugiat repellendus aspernatur distinctio. Minima eius quibusdam quidem tenetur aliquam perspiciatis ipsam alias nulla quos.</p>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column flex-md-row justify-content-center gap-md-4 align-items-center mt-md-0 mt-3">
          <div className="p-4 text-center rounded text-white" style={{backgroundColor:"#801817"}}>
            <h3 className="mb-3 text-black"> Weight loss Program</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at laboriosam porro quaerat qui, ut praesentium eos optio incidunt dolorem ipsa facilis ab fuga magnam fugiat repellendus aspernatur distinctio. Minima eius quibusdam quidem tenetur aliquam perspiciatis ipsam alias nulla quos.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Surgeries