const db = require("../config/config");
const Product = {};
Product.getAll = (result) => {
  const sql = `
    SELECT
        id,
        name,
        description,
        image
    FROM
        categories
    ORDER BY
        name
    `;

  db.query(sql, (err, data) => {
    if (err) {
      console.log("Error:", err);
      result(err, null);
    } else {
      console.log("Id de la nueva categoria:", data);
      result(null, data);
    }
  });
};
Product.create = (product, result) => {
  const sql = `
    INSERT INTO
        products(
            name,
            description,
            price,
            image1,
            image2,
            image3,
            id_category,
            create_at,
            update_at
        )
    VALUES(?, ?, ?, ?, ?,?,?,?,?)
    `;

  db.query(
    sql,
    [
      product.name,
      product.description,
      product.price,
      product.image1,
      product.image2,
      product.image3,
      product.id_category,
      new Date(),
      new Date(),
    ],
    (err, res) => {
      if (err) {
        console.log("Error:", err);
        result(err, null);
      } else {
        console.log("Id del nuevo Producto:", res.insertId);
        result(null, res.insertId);
      }
    }
  );
};

Product.update = (category, result) => {
  const sql = ` 
    UPDATE
    products
SET
name=?,
description=?,
price=?,
image1=?,
image2=?,
image3=?,
id_category=?,
create_at=?,
update_at=?
WHERE
    id = ?
`;

  db.query(
    sql,
    [
      product.name,
      product.description,
      product.price,
      product.image1,
      product.image2,
      product.image3,
      product.id_category,
      new Date(),
      product.id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error:", err);
        result(err, null);
      } else {
        console.log("Id de la  categoria actualizada:", product.id);
        result(null, product.id);
      }
    }
  );
};

Product.delete = (id, result) => {
  const sql = `
    DELETE FROM
     categories
     WHERE
        id=?
     `;
  db.query(sql, id, (err, res) => {
    if (err) {
      console.log("Error:", err);
      result(err, null);
    } else {
      console.log("Id de la categoria eliminada:", id);
      result(null, res.insertId);
    }
  });
};
module.exports = Product;
