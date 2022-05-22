import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import './App.css';
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Pages/Shop";
import SingleShop from "./components/Pages/SingleShop";
import Home from "./components/Pages/Home";
import Dashboard from "./components/Admin/Dashboard";
import  Category  from "./components/Admin/Category";
import Products from "./components/Admin/Products";
import  Slug  from "./components/Admin/Slug";
import Tags from "./components/Admin/Tags";
import AddNewTag from "./components/Admin/AddNewTag";
import AddNewProduct from "./components/Admin/AddNewProduct";
import axios from "axios";




function App() {
 
//category state
 const [cat, setCat] = useState([])

 //tags state
 const [tags, setTags] = useState([])

  //product input from form to json server with state

 const [product, setProduct] = useState()

// category name show for product single pageBreakAfter: 

const cat_name =(id)=>{
  if(id!==''){
 let catego = cat.find(data => data.id == id)
 return catego.name
  }
 
}


  useEffect(() => {
    axios.get('http://localhost:5050/categories').then(res => {
      setCat(res.data.reverse());
    });
    axios.get('http://localhost:5050/tags').then(res => {
      setTags(res.data.reverse());
    });
     axios.get('http://localhost:5050/products').then(res => {
       setProduct(res.data.reverse());
     })
  },[])
   //slug generator
   const makeSlug = (data) => {
     let arr = data.split(' ')
     return arr.join('-').toLowerCase()
   }

   const [alert, setAlert] = useState({
     msg: '',
     type: '',
     status: false
   })

  return (
    <>
    < Header />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop product={ product } setProduct ={setProduct} cat ={cat} tags={tags} />} />
      <Route path="/shop/:slug" element={<SingleShop cat={cat} tags={tags} cat_name ={cat_name} />}/>
      <Route path="/admin" element={<Dashboard/>}>
      < Route Route path = "/admin/category" element={<Category makeSlug={ makeSlug } cat={cat} />}/>
      <Route Route path = "/admin/tags" element={<Tags tags={ tags }/> }/>
      <Route path = "/admin/slug" element={<Slug/>}/> 
      <Route path = "/admin/products" element={<Products product={product} />}/> 
      <Route path = "/admin/add-new-products" element={<AddNewProduct tags={tags} cat={cat} makeSlug={makeSlug} />}/> 
      <Route path = "/admin/add-new-tag" element={<AddNewTag makeSlug={makeSlug} alert={alert} setAlert={setAlert}/>}/> 
      </Route>
      
    </Routes>
    < Footer />
    
    
    </>



 
  );
}

export default App;
