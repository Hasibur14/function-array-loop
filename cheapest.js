const mobile = [
    { name: "iPhone", price: 120000, camera: '12mp', ram: '6gb', rom: '256gb', color: 'black' },
    { name: "Samsung", price: 110000, camera: '12mp', ram: '8gb', rom: '256gb', color: 'black' },
    { name: "Pixel", price: 80000, camera: '12mp', ram: '6gb', rom: '256gb', color: 'black' },
    { name: "One plus", price: 550000, camera: '12mp', ram: '6gb', rom: '256gb', color: 'black' },
]

function getCheapestPhone(phones){
    let min = phones[0];
   for(const phone of phones){
    // console.log(phone);
    if(phone.price < min.price)
    min = phone;
   }
   return min;
}
const cheapest = getCheapestPhone(mobile);
console.log(cheapest);