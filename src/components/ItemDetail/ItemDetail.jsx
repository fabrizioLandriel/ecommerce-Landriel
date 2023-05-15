import React from "react";
import styles from "../ItemDetail/ItemDatail.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CounterContainer from "../Counter/CounterContainer";
export const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div>
      <div className={styles.containerItemDetail}>
        <div className={styles.containerImage}>
          <img src={product.img} alt="" />
        </div>

        <div className={styles.containerDetail}>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Name:</span> {product.title}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Description:</span>{" "}
            {product.description}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Price:</span> ${product.price}.-
          </h2>
        </div>
      </div>
      {
        product.stock > 0 ? <div style={{ display: "flex", justifyContent: "center" }}>
        <CounterContainer stock={product.stock} onAdd={onAdd} initial={cantidadTotal} />
      </div> : <h2>Theres no stock availeable</h2>
      }
     
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/">
          <Button variant="contained">Return</Button>
        </Link>
      </div>
    </div>
  );
};
