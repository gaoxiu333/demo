import { createServer, Server, IncomingMessage, ServerResponse } from "http";

interface Page {
  page(response: ServerResponse): void;
}

class First implements Page {
  page(response: ServerResponse): void {
    response.end("first page");
  }
}

class Root implements Page {
  page(response: ServerResponse): void {
    response.end("main page");
  }
}

const router = new Map<string, Page>();
router.set("/first", new First());
router.set("/main", new Root());

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    let page = router.get(request.url === undefined ? "" : request.url);
    if (page === undefined) {
      page = new Root();
    }
    page.page(response);
  }
).listen(3000);

// const server = createServer(
//   (request: IncomingMessage, response: ServerResponse) => {
//     if (request.url === "/first") {
//       response.end("first page");
//     } else {
//       response.end("Hello World");
//     }
//   }
// ).listen(3000);
