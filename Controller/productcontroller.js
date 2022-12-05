const { pid } = require("process");
const proModel = require("../Model/product");
function saveproduct(req, res) {
  const bodyData1 = req.body;
  console.log(bodyData1);
  let ins = new proModel(bodyData1);

  //save details of product
  ins.save((err) => {
    if (err) res.send("something went wrong");
    else {
      res.render("index", {
        Title: "",prods:""
      });
    }
  });
}

// edit product details

function editProductPage(req, res) {
  let prodId = req.params.id;
  console.log(prodId);
  proModel
    .findOne({_id:prodId })
    .then((product) => {res.render("edit", {product: product,path: "/", pageTitle: "Edit Product",name: "Tru"});
    })
    .catch((err) => console.log(err));
}

//update product details

function updateProduct(req,res){
  let {_id,pname,price,description,imageUrl}=req.body;
  proModel.updateOne({
    _id:_id
  },{$set:{ pname:pname,price:price,description:description,image:imageUrl}})
  .then((product)=>{
    res.render("edit",{product: " ", path: "/", pageTitle: "Edit Product",name: "Tru"})
  })
  .catch((err) => console.log(err));
}

//delete products

function deleteProduct(req, res, next) {
   let pid = req.params.id;
  console.log(pid);
  proModel
    .deleteOne({_id:pid}) //Modify product
    .then((result) => {
      res.redirect("/getproducts");
    })
    .catch((err) => console.log(err));
}

//show all the products

function getallproducts(req, res, next) {
  proModel
    .find()
    .then((products) => {
      res.render("index", {
        Title: "Products List",
        prods: products,
        path: "/",
        pageTitle: "shooping site",
      });
    })
    .catch((err) => console.log(err));
}

module.exports = { saveproduct, getallproducts, editProductPage, deleteProduct,updateProduct};
