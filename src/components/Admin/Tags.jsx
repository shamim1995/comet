import { Button, Form, Table } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

 const Tags = ({ makeSlug, tags }) => {
     
    //delete tags with function

     const handleDelete = (id) => {
         axios.delete('http://localhost:5050/tags/'+ id)
     }
    
     //Edit tags 

     const [edittags, setEdittags] = useState({
         id:'',
         name:''
     })

    // editdata function

     const handleEditData = (id)=>{
         setEditForm(true)
         axios.get('http://localhost:5050/tags/'+id).then(res=>{
             setEdittags(res.data);

         })
     }

     // show hide form edit tags with state

     const [editForm, setEditForm] = useState(false)

     //update form edit data 

     const handleUpdateForm = (id)=>{
         setEditForm(false)
         let slug = makeSlug(edittags.name)
         axios.patch('http://localhost:5050/tags/'+id,{
             name:edittags.name,
             slug: slug
         }).then(res=>{
             setEdittags({
                 id:' ',
                 name:' '
             })
         })

     }

    return (
        <>
        <h1>Tags</h1>

        <Link to="/admin/add-new-tag" className="btn btn-primary">Add New Tag</Link>

        <Table striped border size="sm" >
            <thead>
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Slug</td>
                    <td>Action</td>
                    
                </tr>
            </thead>
            <tbody>

                {
                    tags.map(( data, index ) =>
                    
                        <tr>
                            <td>{ index+1 }</td>
                            <td>{ data.name }</td>
                            <td>{ data.slug }</td>
                            <td>
                                <Button onClick= { () => handleEditData(data.id)}  className="btn btn-info btn-sm">Edit</Button>
                                <Button onClick= { () => handleDelete (data.id) }  className="btn btn-danger btn-sm">Delete</Button>
                                
                            </td>
                        </tr>
                    
                    )
                }
                        
                        
               
            </tbody>
        </Table>
        {
            editForm &&

            <>
                    <hr />

                    <h1>Edit Tags</h1>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" value={edittags.name} onChange={e => setEdittags({ ...edittags, name: e.target.value})} ></Form.Control>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Button onClick = { ()=> handleUpdateForm(edittags.id)} className="btn btn-success btn-sm">Update</Button>
                        </Form.Group>

                    </Form>
            
            
            </>
        }
         

        </>
    )
}
export default Tags;