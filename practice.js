const extension = ".css";

const extensionObj = {
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".png": "text/png",
  ".txt": "text/plain",
};

const myMap = new Map();
myMap.set(".css", "text/css");
myMap.set(".json", "application/json");

console.log(myMap.get(extension) || "text/html");

console.log(extensionObj[extension] || "text/html");
