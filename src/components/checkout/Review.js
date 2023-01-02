import React, { useEffect, useState } from "react";
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import PropTypes from "prop-types"; // ES6
import { useSelector } from "react-redux";

// const products = [
//   { name: "Product 1", desc: "A nice thing", price: "$9.99" },
//   { name: "Product 2", desc: "Another thing", price: "$3.45" },
//   { name: "Product 3", desc: "Something else", price: "$6.51" },
//   { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
//   { name: "Shipping", desc: "", price: "Free" },
// ];
const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA",
];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

const styles = (theme) => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: "700",
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

function Review(props) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state.cart);
  const calculateTotal = () => {
    console.log(cart.cart, "cart.cart");
    const initialValue = 0;
    const sum = cart.cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity * 10,
      0
    );

    setTotal(sum);
  };
  useEffect(() => {
    setProducts(cart.cart);
    calculateTotal();
  }, []);
  console.log(cart, "..cart");

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className="{.listItem}" key={product.id}>
            <ListItemText primary={product.title} secondary={product.desc} />
            <Typography variant="body2">
              {10} x {product.quantity}
            </Typography>
          </ListItem>
        ))}
        <ListItem className="{.listItem}">
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className="{.total}">
            {total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className="{.title}">
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className="{.title}">
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

// Review.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default Review;
