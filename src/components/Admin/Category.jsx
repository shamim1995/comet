import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Button, CloseButton, Form, Table } from 'react-bootstrap';

 const Category = ({makeSlug, cat}) => {

     // alert msg

     const [alert, setAlert]= useState({
         msg:'',
         type:'',
         status:false
     })

    //show hide add category with state

    const [showHideCat, setShowHideCat] = useState(false)

    //show hide add category function with state
     const handleShowHideCat = ()=>{
         setCatEditShowHide(false)
         setShowHideCat(true)
     }
     // add category with state

     const [addCat, setAddCat] = useState({
         id:'',
         name:''
     })
     

    // Add category Function
     const handleCatAddForm = (e) =>{
         e.preventDefault();
        
           
         if(addCat.name ===''){
             setAlert({
                 msg: "All Fields Required",
                 type: "danger",
                 status: true
             })
         }else{
             let slug = makeSlug(addCat)
             axios.post('http://localhost:5050/categories', {
                 id: '',
                 name: addCat,
                 slug: slug
             }).then(res => {
                  setShowHideCat(false)
                 setAddCat('')
             })
         }
     
     }

     //edit cat with state

     const [editCat, setEditCat]= useState({
         id   :'',
         name :''
     })
     
     // cat edit show hide with state
     const [catEditShowHide, setCatEditShowHide]= useState(false)

     // cat edit function

     const handleCatEdit = (id) => {
         setShowHideCat(false)
         setCatEditShowHide(true)
         axios.get('http://localhost:5050/categories/'+id).then(res=>{
             setEditCat(res.data)
         })
     
       }

     //cat edit form hide function
     const handleCatEditForm = ()=>{
         setCatEditShowHide(false)
     }

        //cat edit data update function

     const catEditDataUpdate = (id) => {

            let slug = makeSlug(editCat.name)
            axios.patch('http://localhost:5050/categories/' + id, {
                id: '',
                name: editCat.name,
                slug: slug
            })
                    
        

     }
     // cat delete with function

     const handleCatDelete = (id) =>{

         axios.delete('http://localhost:5050/categories/' + id)
     }

     //close alert button with function
      const handleCloseBtn = () => {
        setAlert({
         status:false,
            msg:'',
            type:'' 
        })
       }


    return (
        <>
        <h1>This is Category</h1>
        <Button onClick = { handleShowHideCat } className="btn-sm my-3">Add New Category</Button>

        <Table striped>
            <thead>
                <tr>
                    <td>Sl</td>
                    <td>Category</td>
                    <td>Slug</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                    cat.map( (data, index) =>
                    
                        <tr>
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>{data.slug}</td>
                            <td>
                                <Button onClick = { () => handleCatEdit(data.id) }  className="btn-sm btn btn-info">Edit</Button>
                                <Button onClick = { ()=> handleCatDelete(data.id) } className="btn-sm btn btn-danger">Delete</Button>
                            </td>
                        </tr>
                    
                    )
                }
              
            </tbody>
        </Table>
        
        {
                showHideCat &&
        <>
                    <h2>Add Category</h2>
                    <hr />
                    
                  
                    <Form onSubmit={handleCatAddForm}>
                        {

                            alert.status && <p className={`alert alert-danger d-flex justify-content-between`} >{alert.msg}<CloseButton onClick = { handleCloseBtn } className="btn-close"></CloseButton></p>

                        }
                        <Form.Group>
                            <Form.Control type="text"  value= {addCat.name} onChange = { e=>setAddCat(e.target.value)} ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit" className="btn-sm btn btn-success my-3">Add</Button>
                        </Form.Group>
                    </Form>
        
        
        </>
        }

            {
                catEditShowHide &&
                <>
                    <h2> Edit Category</h2>
                    <hr />
                    <Form onSubmit={handleCatEditForm}>
                        <Form.Group>
                            <Form.Control type="text" value={editCat.name} onChange={e => setEditCat({ ...editCat, name: e.target.value})} ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Button onClick={() => catEditDataUpdate(editCat.id)} type="submit" className="btn-sm btn btn-success my-3">Update</Button>
                        </Form.Group>
                    </Form>


                </>
            }
       
        </>
    )
}
export default Category;