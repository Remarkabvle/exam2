import React from 'react'
import Products from '../../../components/products/Products'
import useFetch from '../../../hooks/usefetch'
import './manage.scss'


function ManageProduct() {
    let {data, error, loading} = useFetch("/products")
  return (
    <div>
      <h1 className='titleOfManage'>Overview</h1>
      <Products data={data?.products}/>
    </div>
  )
}

export default ManageProduct
