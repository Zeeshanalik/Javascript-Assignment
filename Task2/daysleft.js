let currday = new Date();
let christmas = new Date(currday.getFullYear(), 11, 25);
if (currday.getMonth()== 11 && currday.getDate()>25){
        christmas.setFullYear(christmas.getFullYear()+1);
    }
let oneday = 24 * 60 * 60 * 1000;
let daysleft = (Math.ceil((christmas.getTime() - currday.getTime())/(oneday)));
console.log(`Days Left In Christmas Are: ${daysleft}`);