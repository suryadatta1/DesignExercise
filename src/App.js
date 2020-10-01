import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Menu, Dropdown, Button, Icon } from 'antd';
import { PageHeader } from 'antd';
import fakedata from './fakedata';
import Product from './components/Product';
import './App.css';

function App() {
  const [currency, setCurrency] = useState('INR');

  const [products, setProducts] = useState(fakedata);

  function handleMenuClick({ key }) {
    fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(
          products.map((item) => {
            return {
              ...item,
              price: parseFloat(
                Math.round(item.price * data.rates[key] * 100) / 100
              ).toFixed(2),
            };
          })
        );
      });
    setCurrency(key);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="INR">
        <Icon type="dollar" />
        INR
      </Menu.Item>
      <Menu.Item key="USD">
        <Icon type="dollar" />
        USD
      </Menu.Item>
    </Menu>
  );
  console.log(products);
  const productCollection = products.map((item, index) => {
    return (
      <Col sm={24} md={8} lg={4} key={index}>
        <Product item={item} />
      </Col>
    );
  });

  return (
    <div className="App">
      <PageHeader
        title="Design Exercise"
        extra={[
          <Dropdown overlay={menu}>
            <Button type="primary">
              {currency}
              <Icon type="down" />
            </Button>
          </Dropdown>,
        ]}
      />
      <Row>{productCollection}</Row>
    </div>
  );
}

export default App;
