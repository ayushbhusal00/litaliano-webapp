import React, { Fragment } from "react";
import "./product.styles.scss";

export default function Product() {
  return (
    <Fragment>
      <div className="product product--card">
        <div className="product--top-card">
          <div className="product--top-card__image">
            <img
              src="https://www.vesperhouse.com/wp-content/uploads/2020/12/SI-1.jpg"
              alt="Rose SI"
            />
          </div>
          <div className="product--top-card__sidebar">
            <div className="product--top-card__sidebar__reviewbox">
              <div className="product--top-card__sidebar__reviewbox--ratings">
                4.2
              </div>
              <div className="product--top-card__sidebar__reviewbox--stars">
                ⭐⭐⭐⭐
              </div>
              <div className="product--top-card__sidebar__reviewbox--reviewers">
                1200 reviewers
              </div>
            </div>
            <div className="product--top-card__sidebar__price">
              <input type="button" value="NPR. 5200"></input>
            </div>
          </div>
        </div>
        <div className="product--bottom-card">
          <div className="product--bottom-card__grape">Syrah</div>
          <div className="product--bottom-card__name">
            Rose SI I.G.P, Deumani 2017
          </div>
          <div className="product--bottom-card__region">Tuscany, Italy</div>
        </div>
      </div>
    </Fragment>
  );
}
