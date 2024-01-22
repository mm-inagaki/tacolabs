/// <reference types="@fastly/js-compute" />

addEventListener("fetch", (event) => event.respondWith(handleRequest(event)));

async function handleRequest(event) {
 // Get the client request.
 let req = event.request;

 // Filter requests that have unexpected methods.
 if (!["HEAD", "GET"].includes(req.method)) {
   return new Response("This method is not allowed", {
     status: 405,
   });
 }

 let url = new URL(req.url);

 // If request is to the `/` path...
 if (url.pathname == "/") {
   return new Response('Hello, world!', {
     status: 200,
     headers: new Headers({ "Content-Type": "text/html; charset=utf-8" }),
   });
 }

 // Catch all other requests and return a 404.
 return new Response("The page you requested could not be found", {
   status: 404,
 });
}