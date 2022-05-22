import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const AddNewProduct = ({tags, cat, makeSlug}) => {
    
    //product add form manage with state
    
    const [addProduct, setAddProduct] = useState({
        title:'',
        price:'',
        slug:'',
        salePrice:'',
        shortDescription:'',
        rating:'',
        productDescription:'',
        tagId:'',
        categoryId:'',
        photo:'',
        s:'',
        m:'',
        l:'',
        xl:'',
        xxl:'',
        xxxl:''
        
    })
   
   
    

    //product form submit for json server
   const handleProductSubmit=(e) => {
       e.preventDefault()
      let slug= makeSlug(addProduct.title)
     axios.post('http://localhost:5050/products/',{
        title:addProduct.title,
        slug:slug,
        price:addProduct.price,
        salePrice:addProduct.salePrice,
        shortDescription:addProduct.shortDescription,
        rating:addProduct.rating,
        productDescription:addProduct.productDescription,
        tagId:addProduct.salePrice,
        categoryId:addProduct.categoryId,
        photo:addProduct.photo,
        s:addProduct.s,
        m:addProduct.m,
        l:addProduct.l,
        xl:addProduct.xl,
        xxl:addProduct.xxl,
        xxxl:addProduct.xxxl

     }).then(res=>{
        setAddProduct({
        title:'',
        slug:'',
        price:'',
        salePrice:'',
        shortDescription:'',
        rating:'',
        productDescription:'',
        tagId:'',
        categoryId:'',
        photo:'',
        s:'',
        m:'',
        l:'',
        xl:'',
        xxl:'',
        xxxl:''
        })
    })
   }

 
   

  return (
    <>
    <h1>Add New Product</h1>
    <Link to={'/admin/products'} className='btn btn-primary btn-sm my-3'>All Product</Link>
    <Form onSubmit={handleProductSubmit}>
        <Form.Group className='my-3'>
            <label>Product Title</label>
            <Form.Control type='text' value={addProduct.title} onChange={ e=> setAddProduct ({...addProduct, title: e.target.value}) } ></Form.Control>
        </Form.Group>
         <Form.Group className='my-3'>
              <label>Price</label>
            <Form.Control type='text' value={addProduct.price}  onChange={ e=> setAddProduct ({...addProduct, price: e.target.value}) } ></Form.Control>
        </Form.Group>
         <Form.Group className='my-3'>
              <label>Sale Price</label>
            <Form.Control type='text' value={addProduct.salePrice} onChange={ e=> setAddProduct ({...addProduct, salePrice: e.target.value}) } ></Form.Control>
        </Form.Group>
          <Form.Group className='my-3'>
               <label>Short Description</label>
             <textarea className='form-control' value={addProduct.shortDescription} onChange={ e=> setAddProduct ({...addProduct, shortDescription: e.target.value}) } ></textarea>
        </Form.Group>
        
         <Form.Group className='my-3'>
              <label>Rating</label>
            <Form.Control type='text' value={addProduct.rating}  onChange={ e=> setAddProduct ({...addProduct, rating: e.target.value}) } ></Form.Control>
        </Form.Group>
        <Form.Group className='my-3'>
             <label>Product Description</label>
             <textarea className='form-control' value={addProduct.productDescription} onChange={ e=> setAddProduct ({...addProduct, productDescription: e.target.value}) } ></textarea>
        </Form.Group>
         <Form.Group className='my-3'> 
          <label>Size</label>
          <br/> 
            <label htmlFor="s">S</label><input className="mx-1 me-3" id='s' type="checkbox" value={ addProduct.s } onChange={ e => setAddProduct({...addProduct, s : e.target.value})}/>
            <label htmlFor="m">M</label><input className="mx-1 me-3" id='m' type="checkbox" value={ addProduct.m } onChange={ e => setAddProduct({...addProduct, m : e.target.checked})} />
            <label htmlFor="l">L</label><input className="mx-1 me-3" id='l' type="checkbox" value={ addProduct.l } onChange={ e => setAddProduct({...addProduct, l : e.target.checked})}/>
            <label htmlFor="xl">XL</label><input className="mx-1 me-3" id='xl' type="checkbox" value={ addProduct.xl } onChange={ e => setAddProduct({...addProduct, xl : e.target.checked})}/>
            <label htmlFor="xxl">XXL</label><input className="mx-1 me-3" id='xxl' type="checkbox"value={ addProduct.xxl } onChange={ e => setAddProduct({...addProduct, xxl : e.target.checked})} />
        </Form.Group>

         <Form.Group className='my-3'>  
          <label>Color</label>
         <select className='form-control'  >
             <option value="">-Select-</option>
             <option value="White">White</option>
             <option value="White">Red</option>
             <option value="Black">Black</option>
             <option value="Pink">Pink</option>
             <option value="Gray">Gray</option>
         </select>
        </Form.Group>
        <Form.Group className='my-3'> 
         <label>Tags</label>
         <select className='form-control' value={addProduct.tagId} onChange={ e=> setAddProduct ({...addProduct, tagId: e.target.value})}>
             <option value="">-Select-</option>
             {
                 tags.map(data=>
                     <option value ={data.id}> {data.name} </option>
                    
                    )
             }
            
             
         </select>
        </Form.Group>
        <Form.Group className='my-3'>  
         <label>Category</label>
         <select className='form-control' value={addProduct.categoryId} onChange={ e=> setAddProduct ({...addProduct, categoryId: e.target.value}) } >
             <option value="">-Select-</option>
             {
                 cat.map(data=>
                     <option value={data.id}>{data.name}</option>
                    )
             }
            
             
         </select>
        </Form.Group>
        
         <Form.Group className='my-3'>
              <label>Photo</label>
            <Form.Control type='text' value={addProduct.photo} onChange={ e=> setAddProduct ({...addProduct, photo: e.target.value}) } ></Form.Control>
        </Form.Group>
        <Form.Group className='my-3'>
            <Button type="submit" className="btn btn-success btn-sm">Add</Button>
        </Form.Group>
         
    </Form>

    </>
  )
}

export default AddNewProduct