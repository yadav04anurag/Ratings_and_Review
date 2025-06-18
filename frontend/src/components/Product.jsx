import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='m-1  rounded bg-white bg-gradient'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top'  />
      </Link>
      {/* style={{height:"170px", width:"200px", padding:"10px"}} */}
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='product-title fs-4'>
          {/* <strong>{product.name}</strong> */}
          {product.name}
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>&#8377;{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
