// bodlogo1. Ugugdsun array iin hamgiin tom, hamgiin bagiin olj, dundajiin olj, min, max, avg gsn 3 utag butsaadag function bichih. jishee ni: input [1, 2, 3, 4, 5] output { min: 1, max: 5, avg: 3 }

let b1array = [1, 2, 3, 4, 5];

function max(x) {
  let first = x[0];
  for (i = 0; i < x.length; i++) {
    if (first < x[i]) {
      first = x[i];
    }
  }
  return first;
}
let maxx = max(b1array);
// console.log("1: ", maxx);

function min(x) {
  let first = x[0];
  for (i = 0; i < x.length; i++) {
    if (first > x[i]) {
      first = x[i];
    }
  }
  return first;
}
let minn = min(b1array);
// console.log("1: ", minn);

function avg(x) {
  let first = 0;
  for (i = 0; i < x.length; i++) {
    first += x[i];
  }
  return first;
}
let avgg = avg(b1array);
// console.log("1: ", avgg / b1array.length);

console.log("min: ", minn, "max: ", maxx, "avg: ", avgg / b1array.length);

// bodlogo2. Ugugdsun zahialguudiin niit borluulaltiin dun oldog function bichih.
const orders = [
  {
    orderId: 1,
    items: [
      { itemName: "Apple", price: 1 },
      { itemName: "Banana", price: 2 },
    ],
  },
  {
    orderId: 2,
    items: [
      { itemName: "Orange", price: 1.5 },
      { itemName: "Grapes", price: 3 },
    ],
  },
];

function sales(x) {
  let sum = 0;
  for (i = 0; i < x.length; i++) {
    // console.log(x[i].items);
    for (j = 0; j < x[i].items.length; j++) {
      sum += x[i].items[j].price;
    }
  }
  return sum;
}
let saless = sales(orders);
console.log("Total sales: ", saless);

// bodlogo3. Ugugdsun array iin anhnii utagtai bolon квадрат, куб iin oldog function bichih. jishee ni: input [1, 2, 3, 4, 5]
// output [ { original: 1, square: 1, cube: 1 }, { original: 2, square: 4, cube: 8 }, { original: 3, square: 9, cube: 27 },  { original: 4, square: 16, cube: 64 }, { original: 5, square: 25, cube: 125 } ]

let b3array = [1, 2, 3, 4, 5];

function num2(x) {
  return x * x;
}

function num3(x) {
  return x * x * x;
}

for (i = 0; i < b3array.length; i++) {
  console.log(
    "original: ",
    b3array[i],
    "square: ",
    num2(b3array[i]),
    "cube: ",
    num3(b3array[i])
  );
}

// bodlogo4. Ugugdsun company iin data aas hamgiin ih tsalintai ajiltang oldog function bichih.

const company = {
  name: "TechCorp",
  address: "123 Silicon Valley",
  employees: [
    { name: "Alice", salary: 90000 },
    { name: "Bob", salary: 120000 },
    { name: "Charlie", salary: 110000 },
  ],
};

function maxsalary(x) {
  let zero = 0;
  let employeename = "";
  for (i = 0; i < x.employees.length; i++) {
    if (zero < x.employees[i].salary) {
      zero = x.employees[i].salary;
      employeename = x.employees[i].name;
    }
  }
  return employeename;
}
let maxsalaryname = maxsalary(company);
console.log("employee - max salary: ", maxsalaryname);

// bodlogo1. bagshaas.

function findAvgMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  let avg = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = sum / arr.length;
  return {
    baga: min,
    ih: max,
    dundaj: avg,
  };
}
let result = findAvgMinMax(b1array);
console.log("bodlogo1 bagshaas: ", result);
