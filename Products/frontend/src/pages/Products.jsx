import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Products = () => {

    let [product, setProduct] = useState([])

    let getData = async () => {
        let fetchedData = await fetch("https://fakestoreapi.com/products")
        let data = await fetchedData.json()
        setProduct(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Navbar/>
            <div className="productPage">
                <h1>Welcome To Products page</h1>
                <div className="prodContainer">
                    {
                        product.map((ele, index) => {
                            return (
                                <div key={index} className="card">
                                    <img src={ele.image} alt="image not found" />
                                    <h2>Title : {ele.title.slice(0, 12)}</h2>
                                    <h3>Price : {ele.price}</h3>
                                    <h3>Rating : {ele.rating.rate}</h3>
                                    <Link to={`${ele.id}`}>More info</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Products
