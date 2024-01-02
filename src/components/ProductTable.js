import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable(props) {
  const {products,filterText,inStockOnly} = props
  const rows = [];
  let lastCategory = null;
  
  const myFilter = products.filter(el => (el.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) && (inStockOnly && el.stocked || !inStockOnly));
  
  const finalList = myFilter.reduce( (a,c) => {
    if(c.category !== a.lastCategory) {
      a.output = [...a.output, <ProductCategoryRow key={c.category} category={c.category} />]
      a.lastCategory = c.category
    }
    a.output = [...a.output, <ProductRow key={c.name} product={c}/>]
    return a
  },{lastCategory:null, output: []})
  
  console.log(finalList)

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
          {finalList.output}
      </tbody>
    </table>
  )
}

export default ProductTable