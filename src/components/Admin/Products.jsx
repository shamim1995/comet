import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Products = ({}) => {
    return (
        <>
        <h1>This is Products</h1>
        <Link to={'/admin/add-new-products'} className='btn btn-primary btn-sm my-3' > Add New Product</Link>
        <Table striped>
            <thead className='text-center'>
                <tr>
                    <td>sl</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>sale Price</td>
                    <td>Categories</td>
                    <td>Tags</td>
                    <td>Photo</td>
                    <td>Action</td>
                    
                </tr>
            </thead>
            <tbody className='text-center'>
                <tr>
                    <td>1</td>
                    <td>T-shirt</td>
                    <td>120</td>
                    <td>80</td>
                    <td>Men</td>
                    <td>Cotton</td>
                    <td><img style ={{width:'40px', height:'40px', objectFit:'cover'}} src="https://static-01.daraz.com.bd/p/6ceabe33e6ea20a4e582a8c5e4e59ca0.jpg" alt="" /></td>
                    <td>
                        <Button className="btn btn-info btn-sm" >View</Button>
                        <Button className='btn btn-dark btn-sm'>Edit</Button>
                        <Button className='btn btn-danger btn-sm'>Delete</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}

export default Products
