let date = (ch) => {
    let CurrentDate = new Date();
    let day = CurrentDate.getDate();
    let month = CurrentDate.getMonth()+1;
    let year = CurrentDate.getFullYear();
    return (day+ch+month+ch+year);
};

console.log(date('-'));
