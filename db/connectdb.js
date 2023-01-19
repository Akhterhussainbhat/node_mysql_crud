import mysql from 'mysql'
 var connectdb=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   database:'nodecrud'
 });
 connectdb.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  
export default connectdb; 