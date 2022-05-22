import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'


const Shop = ({ product, setProduct, cat, tags }) => {
   
    return (
        <>
         <section>
      <div className="container">
        <div className="row">
          <div className="col-md-3 hidden-sm hidden-xs">
            <Sidebar setProduct= {setProduct} cat ={cat} tags={tags}/>
          
          </div>
          <div className="col-md-9">
       
            <div className="container-fluid">
              <div className="row">
                {
                  
                   product.map( data =>
                    
                  <div className="col-md-4 col-sm-6">
                  <div className="shop-product">
                    <div className="product-thumb">
                      <Link to={`/shop/${data.slug}`}>
                        <img style={{width:'300px', height:'300px', objectFit:'cover'}} src={data.photo} alt=""/>
                      </Link>
                      <div className="product-overlay"><a href="#" className="btn btn-color-out btn-sm">Add To Cart<i className="ti-bag"></i></a>
                      </div>
                    </div>
                    <div className="product-info">
                      <h4 className="upper"><a href="#">{data.title}</a></h4>
                      {
                        data.salePrice ===''?
                        <span style={{color:'red', fontSize:'22px'}} >{data.price}৳</span>
                        :
                        <>
                        <span style={{textDecoration:'line-through', display:'inline-block', marginRight:'10px'}}>{data.price}৳</span><span style={{color:'red', fontSize:'22px'}}>{data.salePrice}৳</span>
                        </>
                      }
                      
                      
                      <div className="save-product"><a href="#"><i className="icon-heart"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                    
                    
                    )
                }
             
                           
              </div>
              
              <ul className="pagination">
                <li><a href="#" aria-label="Previous"><span aria-hidden="true"><i className="ti-arrow-left"></i></span></a>
                </li>
                <li className="active"><a href="#">1</a>
                </li>
                <li><a href="#">2</a>
                </li>
                <li><a href="#">3</a>
                </li>
                <li><a href="#">4</a>
                </li>
                <li><a href="#">5</a>
                </li>
                <li><a href="#" aria-label="Next"><span aria-hidden="true"><i className="ti-arrow-right"></i></span></a>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
      
    </section>
        
 </>
    )
}

export default Shop
