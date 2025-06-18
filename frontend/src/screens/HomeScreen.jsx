import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import "./HomeScreen.css"; // Import the CSS file

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <div className="home-screen">
      {!keyword ? (
        <div className="carousel-section">
          <ProductCarousel />
        </div>
      ) : (
        <div className="back-button-container">
          <Link to="/" className="btn btn-light btn-back">
            Go Back
          </Link>
        </div>
      )}
      {isLoading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : error ? (
        <div className="error-container">
          <Message variant="danger">
            {error?.data?.message || error.error}
          </Message>
        </div>
      ) : (
        <div className="products-section">
          <Meta />
          {data.products.length === 0 ? (
            <div className="no-products-container">
              <Message variant="info">No products found</Message>
            </div>
          ) : (
            <>
              <div className="products-header">
                <h1 className="section-title">Latest Products</h1>
              </div>
              <Row className="products-grid">
                {data.products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="product-col">
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              <div className="pagination-container">
                <Paginate
                  pages={data.pages}
                  page={data.page}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;