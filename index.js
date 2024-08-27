// Use this workspace to submit your homework for Week 1: Assignment 2: Git + GitHub 
let myhttp = require('http');

let myserver =myhttp.createServer(
  function( myrequest, myresponse ) {
    console.log( myrequest.url);

    let mytext;
    if ( myrequest.url === "/Hello") {
      mytext = "Hello World";
    } else {
      mytext = "Welcome to my server";
    }


    myresponse.writeHead( 200, { 'Content-Type': 'text/plain' } );
    
    myresponse.end( mytext );
  }
);  

myserver.listen( 80, "0.0.0.0" );

console.log("Server has started");