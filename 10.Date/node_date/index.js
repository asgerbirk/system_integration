console.log(new Date()); // 2024-02-22T07:33:45.183Z

console.log(Date()); //Thu Feb 22 2024 08:35:10 GMT+0100 (Central European Standard Time)

console.log(Date.now()); // 1708587396168 Coordinated Universal Time

const date = new Date();

const danishDate = new Intl.DateTimeFormat("da-dk").format(date); // 22-02-2024
console.log(danishDate);

const americanDate = new Intl.DateTimeFormat("en-us").format(date); // 2/22/2024
console.log(americanDate);
