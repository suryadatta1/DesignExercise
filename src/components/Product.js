import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

function Product(props) {
  return (
    <div className="product">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={props.item.image} />}
      >
        <Meta title={props.item.title} description={props.item.price} />
      </Card>
    </div>
  );
}

export default Product;
