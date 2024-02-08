const randomString = "This is a random string.";

const encodeString = btoa(randomString);

console.log(encodeString);

const decodeString = atob(encodeString);

console.log(decodeString);

const encoded = Buffer.from(randomString).toString("base64");

console.log(encoded);

const decoded = Buffer.from(encoded, "base64").toString("utf-8");

console.log(decoded);
