import React from "react";
import "./category.styles.scss";
export default function Category({ products }) {
  return (
    <>
      {products.map((category) => {
        console.log("Category: " + category.type);
        return (
          <>
            <div
              className="category--card"
              key={category.type}
              style={{
                background: `url(${category.featureImage})`,
              }}
            >
              <div className="category--card__innerbox">
                <h3>{category.type}</h3>
                <a href="/">Shop Now</a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
