const express = require("express");
const {
  saveproduct,
  getallproducts,
  editProductPage,
  deleteProduct,
  updateProduct,
} = require("./Controller/productcontroller");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("index", { Title: " WelCome To Our Shopping Mall ", prods: "" });
});
router.get("/addproduct", (req, res) => {
  res.render("add");
});
router.get("/edit/:id", editProductPage);

router.post("/edit-data",updateProduct);


router.post("/addedproduct", saveproduct);
router.get("/getproducts", getallproducts);
router.get("/delete/:id", deleteProduct);
module.exports = router;

