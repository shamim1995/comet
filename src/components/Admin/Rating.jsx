import React from 'react'

const Rating = ({val}) => {
    if(val=== "5"){
       return (
  
                <span className="rating-stars">
                    <i className="ti-star full"></i>
                    <i className="ti-star full"></i>
                    <i className="ti-star full"></i>
                    <i className="ti-star full"></i>
                    <i className="ti-star full"></i>
                </span>
   
              )             
    }else if(val==="4"){
      
       return (
  
            <span className="rating-stars">
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star"></i>
            </span>
   
            )
  }else if(val === "3"){
    return (
  
            <span className="rating-stars">
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star full"></i>
                <i className="ti-star"></i>
                <i className="ti-star"></i>
            </span>
   
            )
  }else if(val==="2"){
       return (
  
                <span className="rating-stars">
                    <i className="ti-star full"></i>
                    <i className="ti-star full"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                </span>
   
            )
  }else if(val==="1"){
     return (
  
            <span className="rating-stars">
                <i className="ti-star full"></i>
                <i className="ti-star"></i>
                <i className="ti-star"></i>
                <i className="ti-star"></i>
                <i className="ti-star"></i>
            </span>
   
          )
  }else{
    return (
    
            <span className="rating-stars">
                <i className="ti-star"></i>
                <i className="ti-star"></i>
                <i className="ti-star"></i>
                <i className="ti-star"></i>
                <i className="ti-star"></i>
            </span>
    
         )
  }  

}

export default Rating