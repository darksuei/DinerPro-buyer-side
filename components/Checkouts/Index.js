import React from "react";
import Cartcontainer from "./cartcontainer";
import Form from "./Form";

const CheckoutComponent = () => {
  return (
    <div className="flex items-start justify-between px-12">
      <Form />
      <Cartcontainer />
    </div>
  );
};

export default CheckoutComponent;
