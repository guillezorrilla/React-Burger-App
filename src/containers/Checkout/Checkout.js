import React  from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ContactData from "./ContactData/ContactData";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
// import * as actions from "../../store/actions/index";

const checkout = props => {
  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };
  const checkoutContinueHandler = () => {
    props.history.replace("/checkout/contact-data");
  };
    let summary = <Redirect to='/' />;

    if (props.ing) {
      const purchasedRedirect = props.purchased ? (
        <Redirect to='/' />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={props.ing}
            checkoutCancelled={checkoutCancelledHandler}
            checkoutContinue={checkoutContinueHandler}
          />
          <Route
            path={props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  
}

const mapStateToProps = state => {
  return {
    ing: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(checkout);
