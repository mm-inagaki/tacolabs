/// <reference types="@fastly/js-compute" />
import { Logger } from "fastly:logger";
import { includeBytes } from "fastly:experimental";
import { ConfigStore } from "fastly:config-store";

// Load static files as a Uint8Array at compile time.
// File path is relative to root of project, not to this file
const notfoundPage = includeBytes("./src/not-found.html");
const robotsPage = includeBytes("./src/robots.txt");

const handler = async (event) => {
  // get the request from the client
  const req = event.request;
  const reqURL = new URL(req.url);
  const reqPath = reqURL.pathname;

  // Prepare logs
  const logger = new Logger("tacolog");
  logger.log('Request: ' + reqURL);
  logger.log('User-Agent: ' + req.headers.get('User-Agent'));

  // Check if there is a redirect for the URL requested. 
  // If there is, redirect the client.
  const config = new ConfigStore('redirects');
  const dest = config.get(reqPath);

  if (dest) {
    return new Response("", {
      status: 301,
      headers: { Location: dest },
    });
  }

  const backendResponse = await fetch(req, {
    backend: "vcl-origin",
    cacheOverride: new CacheOverride("pass")
  });

  // Handle 404s with a custom response
  if (backendResponse.status == 404) {
    return new Response(notfoundPage, {
      status: 404,
    });
  }

  // Return robots.txt with a custom response
  if (reqURL.pathname.endsWith("/robots.txt")) {
    return new Response(robotsPage, {
      status: 200,
    });
  }

  // If status is not 404, send the backend response to the client
  if (backendResponse.status != 404) {
    // Add headers to the response back to the client
    backendResponse.headers.append("x-tacos", "🌮🌮🌮")
    return backendResponse;
  }
}

addEventListener("fetch", event => event.respondWith(handler(event)));