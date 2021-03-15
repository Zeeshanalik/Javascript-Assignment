const emp = ['Zeeshan', 'haris', 'Zaeem', 'Faizan','Bilal', 'Gulzar']
const seniorEmp = ['Zaeem', 'Faizan', 'Bilal']
let result = emp.filter((ename) => seniorEmp.includes(ename));
console.log(result);