// Latihan JSON
// Willi
// Minggu, 4 September 2022
// Full Stack JavaScript Web Developer Tingkat Menengah

// Membaca file json.
const fs = require('fs');
let data = fs.readFileSync('./data.json','utf8');

let parsedData = JSON.parse(data);
// console.log(parsedData);

console.log("List Students:");
parsedData.forEach(data => {
    console.log(`${data.id}. ${data.name}, ${data.score}`);
})

// Hasil:
/*
List Students:
1. Willi (95)
2. Darwis (85)
*/