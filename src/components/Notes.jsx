import React from "react";



export default function Notes({element,notes,setNotes,seteditid,check,setcheck}) {






// const Oncheck = (id) =>{
 
//   const idcheck =  notes.filter((elem)=>{
//     if(elem.id==id){
     
      
//     }
//     console.log(id);
//     setcheck(!check);

//   })
// }

const Oncheck = (id) =>{
  const checkSt = notes.filter((elem)=>{
    console.log(id)
    if(elem.id!=id)
  
  setcheck(!check)
  // console.log();
  })
}
  // console.log(element);
  const removeHandler =(id)=>{
    const newNotes = notes.filter((elem)=>{
      if(elem.id!==id){
        return elem
      }
    })
  setNotes(newNotes)
    // console.log(notes);
   

  }
  const editHandler = (id) =>{
    seteditid(id)
    // console.log(id)
    notes.filter((elem)=>{
      if(elem.id===id)
      document.getElementById("edittitle").value = elem.title
      document.getElementById("editdesc").value = elem.desc

    })
  }

  return (
    <>
<div className="row">
  <div className="col-sm-6">
    <div className="card">
  <div className="card-body " style={{textTransform:"capitalize",backgroundColor:check ?"cyan":""}}>
    <h5 className="card-title">{element.title}</h5>
    <p className="card-text">{element.desc}</p>
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={Oncheck}/>
  <label className="form-check-label mb-6" for="flexCheckDefault">
    Done
  </label>
</div>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{
    editHandler(element.id)
    
   }}>
  Edit
</button>
   <button className="btn btn-danger mx-2" onClick={()=>{
    removeHandler(element.id)
    
   }}>Delete</button>
  </div>
</div>
</div>
</div>
    </>
  );
}
