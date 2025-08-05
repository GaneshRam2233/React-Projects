import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Product = () => {

    let params = useParams()
    let { pid } = params

    let [product,setProduct] = useState({})
    let navigate = useNavigate()

    let getData = async () => {
        let fetchedData = await fetch(`https://fakestoreapi.com/products/${pid}`)
        let data = await fetchedData.json()
        setProduct(data)
    }

    useEffect(()=>{
        getData()
    },[])

    let previous=()=>{
        navigate(-1)
    }

    let addCart = async (product)=>{
        let {id,...rest} = product
        await axios.post("http://localhost:3000/items",rest)
        alert("Product added to cart")
    }

    return (
        <>
            <div className="productMain">
                <div className="inner">
                    <img src={product.image} alt="image not found" />
                    <h1>Product Name - {product.title}</h1>
                    <p><b>Description</b> - {product.description}</p>
                    <h2>Price - {product.price}</h2>
                    <h2>Rating - {product.rating?.rate}</h2>
                    <button onClick={()=>addCart(product)} >Add To Cart</button>
                </div>
                <button className='btn' onClick={previous} >Previous</button>
            </div>
        </>
    )
}

export default Product
