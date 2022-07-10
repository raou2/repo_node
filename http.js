 const http  = require('http');
	const sever = http.createServer((req,res)=>{
 // console.log(req.url) 
	if(req.url === '/'){ 
		res.end('welcom to our home page')
	}
	if(req.url === '/about'){
		res.end(`<h3>about page </h3>`)
	}
		res.write('<h3>google it </h3>')
	
	
	}
	
	)
	sever.listen(5000);
