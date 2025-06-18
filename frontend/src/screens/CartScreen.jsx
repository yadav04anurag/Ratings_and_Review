import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import './CartScreen.css';

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping');
  };

  return (
    <div className="cart-container">
      <Row>
        <Col md={8}>
          <h1 className="cart-title">Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message className="empty-cart-message">
              Your cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup className="cart-items-list">
              {cartItems.map((item) => (
                <ListGroup.Item className="cart-item" key={item._id}>
                  <Row className="align-items-center">
                    <Col md={2}>
                      <Image 
                        className="cart-item-image" 
                        src={item.image} 
                        alt={item.name} 
                        fluid 
                        rounded 
                      />
                    </Col>
                    <Col md={3}>
                      <Link 
                        className="cart-item-name" 
                        to={`/product/${item._id}`}
                      >
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={2} className="cart-item-price">
                      ₹{item.price}
                    </Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        className="quantity-select"
                        value={item.qty}
                        onChange={(e) =>
                          addToCartHandler(item, Number(e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        className="remove-item-btn"
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item._id)}
                      >
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card className="summary-card">
            <ListGroup variant="flush">
              <ListGroup.Item className="summary-title">
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                  items
                </h2>
              </ListGroup.Item>
              <ListGroup.Item className="subtotal-item">
                <span className="subtotal-text">Total: </span>
                <span className="subtotal-amount">
                  ₹
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="checkout-btn"
                  type="button"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartScreen;