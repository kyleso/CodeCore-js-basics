// new Date(year, month, day)
for (let year = 2014; year <= 2050; year += 1) {
   let  findDate = new Date(year, 0, 1);
   if (findDate.getDay() === 0) {
       console.log(`The 1st of January is a Sunday in the year ${year}.`);
       break;
   }
}