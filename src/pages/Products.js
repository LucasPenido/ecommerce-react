import { useState, Fragment } from 'react';
import AllProducts from '../components/products/allProducts';
import SideBar from '../components/sideBar/sideBar';

export default function Produtos() {
  const [orderBySelected, setOrderBySelected] = useState();

  return (
    <Fragment>
      <SideBar setOrderBySelected={setOrderBySelected}/>
      <AllProducts orderBySelected={orderBySelected}/>
    </Fragment>
  );
}
