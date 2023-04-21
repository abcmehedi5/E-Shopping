import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = ({totalPrice,quantity,totalShipping , grandTotal , handleDeleteCart}) => {
    
    return (
        <div className="card border-success mb-3">
                <div className="card-header bg-transparent border-success">
                  <h4>Order Summary</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Selected Items: {quantity}</h5>
                  <p>Total: ${totalPrice}</p>
                  <p>Total Shipping Charge: ${totalShipping}</p>
                  <hr />
                  <h5 className="text-danger">Grand Total: $ {grandTotal}</h5>
                </div>
                {/* <div className="card-footer bg-transparent border-success">
                  <button
                    onClick={() => handleDeleteCart()}
                    className="btn btn-info w-100 "
                  >
                    Clear cart
                  </button>
                  <Link to={"/checkout"}>
                    <button className="btn btn-danger w-100 mt-2">
                      Checkout
                    </button>
                  </Link>
                </div> */}
              </div>
    );
};

export default OrderSummary;