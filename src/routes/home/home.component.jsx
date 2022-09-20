import Product from "../../components/product/product.component";
import "./home.styles.scss";
import PRODUCT_DATA from "../../product-data";
import Category from "../../components/category/category.component";

export default function Home() {
  return (
    <div className="container">
      <div className="categories-section">
        <h2 className="categories-section__title">Choose from Types</h2>
        <div className="categories-section__list">
          <Category products={PRODUCT_DATA} />
        </div>
      </div>

      {console.log(PRODUCT_DATA)}
      <h1>This is the Home Page</h1>
      <Product></Product>
    </div>
  );
}
