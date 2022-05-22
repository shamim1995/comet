
import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, CloseButton } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const AddNewTag = ({ makeSlug, alert,setAlert}) => {

  //add tags

    const [tag, setTag]= useState({
      id:'',
      name:''
    })
 
    const handleTagSubmit = (e) => {
        e.preventDefault();

        if(tag.name===''){
          setAlert({
            status:true,
            msg:'All Fields Required',
            type:'danger'
          })
        }else{
              let slug = makeSlug(tag)
              axios.post('http://localhost:5050/tags',{

                id:'',
                name: tag,
                slug: slug

              }).then(res=>{
                setTag({
                  id:'',
                  name:''
                })
              })
           }

       
       
     

    }
    // close alert button with function
      const handleCloseBtn = () => {
        setAlert({
         status:false,
            msg:'',
            type:'' 
        })
       }

  return (

    <>
    <h1>Add New Tag</h1>
    <Link to="/admin/tags" className='btn btn-primary btn-sm my-3' >All Tags</Link>

    <Form onSubmit= { handleTagSubmit }>
          {

                alert.status && <p className={`alert alert-danger d-flex justify-content-between`} >{alert.msg}<CloseButton onClick= { handleCloseBtn } className="btn-close"></CloseButton></p>

          }
        <Form.Group>
        <Form.Control type='text' value = {tag.name} onChange= {e => setTag(e.target.value)} />
        </Form.Group>
         <Form.Group>
         <Button type="submit" className='btn btn-success my-3 btn-sm'>Add</Button>
        </Form.Group>
        
    </Form>
    </>
  )
}

export default AddNewTag;