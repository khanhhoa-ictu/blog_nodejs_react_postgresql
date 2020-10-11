var express = require('express');
var router = express.Router();

const {Pool, Client } = require('pg');
// khởi tạo kết nối đến database
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'blog',
    password: '123',
    port: 5432,
});

router.get('/', function(req, res, next) {});
router.get('/add', function(req, res, next) {
	res.render('add',{});
});
// lay du lieu tu csld
router.get('/getdata01', function(req, res, next) {
	
	pool.query('SELECT * FROM baiviet',(error,response)=>{
		if(error){
			console.log(error);
		}
		else {
			res.send(response.rows);
		}
		
	})
    
});


//them du lieu
router.post('/add', function(req, res, next) {
	var tieude = req.body.tieude;
	var noidung = req.body.noidung;
	pool.query('INSERT INTO baiviet (tieude,noidung) VALUES ($1,$2)',
		[tieude,noidung],(error,respon)=>{
		if(error){
			res.send("err");
		}
		else {
			res.send("insert du lieu thanh cong");
			
		}
		
	})
});

//xoa du lieu
router.post('/delete', function(req, res, next) {
	var id = req.body.id;
	pool.query('DELETE FROM baiviet WHERE id = $1',[id],(error,response)=>{
		if(error){
			console.log("err");
		}
		else {
			
			res.send("xoa thanh cong");
		}
		
	})
    
});
//update du lieu

module.exports = router;
