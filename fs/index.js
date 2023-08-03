const fs= require('fs');
fs.mkdirSync("ramit");

fs.writeFileSync('ramit/bio.txt',"My name is Ramit Ranjan");

fs.appendFileSync('ramit/bio.txt',"Completed my post graduation from NITP");

const data=fs.readFileSync('ramit/bio.txt',"utf-8");
console.log(data);

fs.renameSync('ramit/bio.txt','myBio.txt');

fs.unlinkSync("myBio.txt");

fs.rmdirSync("ramit");