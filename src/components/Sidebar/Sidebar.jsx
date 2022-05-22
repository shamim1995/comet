import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShopImgTwo from '../../_assets/images/shop/2.jpg'

const Sidebar = ({setProduct, cat,tags}) => {

    // state manage for sidebar search form
    const [search, setSearch] = useState('')

    // useeffect get to data for sedebar search form
    useEffect(()=>{
      if(search !==''){
         axios.get(`http://localhost:5050/products/?q=${search}`).then(res=>{
            setProduct(res.data)
        })
      }
       
    })

    // onclick funciton with category

    const handleSearchSidebar= (e, id) => {
        e.preventDefault();
        setSearch('')
        axios.get(`http://localhost:5050/categories/${id}/products`).then(res=>{
            setProduct(res.data)
        })
    }

    // onclick Function with tags sidebar

    const handleTagsSidebar = (e,id) =>{
      e.preventDefault()
       setSearch('')
        axios.get(`http://localhost:5050/tags/${id}/products`).then(res=>{
            setProduct(res.data)
        })
     
    }
    

  return (
    <>
     <div className="sidebar">
                  <div className="widget">
                <h6 className="upper">Search Shop</h6>
                <form>
                  <input type="text" placeholder="Search.." value={search} onChange={e=> setSearch(e.target.value)} className="form-control"/>
                </form>
              </div>
              <div className="widget">
                <h6 className="upper">Categories</h6>
                <ul className="nav">
                  
                  {
                      cat.map( data=>
                        <li><a onClick={ (e) => handleSearchSidebar(e,data.id)} href={data.id}>{data.name}</a>
                        </li>
                        )
                  }
                  
                  
                </ul>
              </div>
             
              <div className="widget">
                <h6 className="upper">Trending Products</h6>
                <ul className="nav product-list">
                  <li>
                    <div className="product-thumbnail">
                      <img src={ShopImgTwo} alt=""/>
                    </div>
                    <div className="product-summary"><a href="#">Premium Suit Blazer</a><span>$199.99</span>
                    </div>
                  </li>
                  <li>
                    <div className="product-thumbnail">
                      <img src={ShopImgTwo} alt=""/>
                    </div>
                    <div className="product-summary"><a href="#">Vintage Sweatshirt</a><span>$199.99</span>
                    </div>
                  </li>
                  <li>
                    <div className="product-thumbnail">
                      <img src= {ShopImgTwo}alt=""/>
                    </div>
                    <div className="product-summary"><a href="#">Reiss Vara Blazer</a><span>$199.99</span>
                    </div>
                  </li>
                </ul>
              </div>
                            
              <div className="widget">
                <h6 className="upper">Popular Tags</h6>
                <div className="tags clearfix">
                  {
                    tags.map(data=>
                      <a onClick={(e)=> handleTagsSidebar(e,data.id)} href={data.id}>{data.name}</a>
                      
                      )
                  }
                  
                  
                </div>
              </div>
              
            </div>
    </>
  )
}

export default Sidebar