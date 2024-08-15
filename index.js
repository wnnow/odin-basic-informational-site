import http from "http";
// import fs from "fs"; // call back fs base
import { promises as fs } from "fs";
const PORT = 8000;

// fs call back base
// const server = http.createServer((req, res) => {
//   try {
//     if (req.method === "GET") {
//       let filePath;
//       switch (req.url) {
//         case "/":
//           filePath = "./public/index.html";
//           break;
//         case "/about":
//           filePath = "./public/about.html";
//           break;
//         case "/contact":
//           filePath = "./public/contact-me.html";
//           break;
//         default:
//           filePath = "./public/404.html";
//           break;
//       }

//       fs.readFile(filePath, (err, data) => {
//         if (err) {
//           res.writeHead(500, { "Content-Type": "text/html" });
//           res.end("500 Internal Server Error");
//           console.error(err);
//         } else {
//           res.writeHead(200, { "Content-Type": "text/html" });
//           res.end(data);
//         }
//       });
//     } else {
//       res.writeHead(405, { "Content-Type": "text/plain" });
//       res.end("405 Method Not Allowed");
//     }
//   } catch (error) {
//     console.error(error);
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end("500 Internal Server Error");
//   }
// });

// fs promise base
const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;
      switch (req.url) {
        case "/":
          filePath = "./public/index.html";
          break;
        case "/about":
          filePath = "./public/about.html";
          break;
        case "/contact":
          filePath = "./public/contact-me.html";
          break;
        default:
          filePath = "./public/404.html";
          break;
      }
      try {
        const data = await fs.readFile(filePath, "utf8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } catch (error) {
        res.writeHeade(500, { "Content-Type": "text/plain" });
        res.end("500 Internal Server Error");
        console.error(error);
      }
    } else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("405 Method Not Allowed");
    }
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("500 Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
