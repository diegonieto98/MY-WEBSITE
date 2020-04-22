
const index = (req,res,next) => {
	res.render('index',{
	});
};

const getProducts = (req, res, next) => {
	res.render('products', {
		product : product
	});
};

const getCoupons = (req, res, next) => {
	res.render('coupons', {
		coupon : coupon
	});
};

const detailsProducts = (req, res, next) => {
	res.render('details-products', {
		product:  product
	});
};

const detailsCoupons = (req, res, next) => {
	res.render('details-coupons', {
		detailsC
	});
};


const addProduct = (req, res) => {

	const newname = req.body.newname;

	product.push({
		id: product.length + 1,
		name: newname
	});
	res.render('newproduct',{
		product : product
	})

	res.redirect('/');
};

const validarCoupon = (req, res) => {
	res.render('validarCoupon', {
	});
};

const addCoupon = (req, res, next) => {
	var newName = req.body.newName;
	var newDescription = req.body.newDescription;
	var newId = req.body.newId;

	coupon.push = {
		id : coupon.length + 1,
		name : newName,
		description : newDescription,
		product_id: newId, 
		validsince: new Date() ,// string datetime ISO8601 format
		validuntil: '2021-02-02 T23:59:00.999' // string datetime ISO8601 format
	}
	res.render('newcoupons', {
		coupon 
	});

	res.redirect('/newc');
};

const viewCoupon = (req,res,next) => {
	res.render('newc', {
		coupon 
	});
}

const findproduct = (req,res,next) => {
	const productid = req.body.productid;

	res.render('findproduct'),{
		product : product
	}
}

module.exports = {
  index,
  getProducts,
  addProduct,
  getCoupons,
  addCoupon,
  detailsProducts,
  detailsCoupons,
  validarCoupon,
  viewCoupon,
  findproduct
};
