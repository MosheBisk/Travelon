///Create travle table head
document.getElementById('tInfoTrav').innerHTML = `<thead><tr>
    <th>Travel code</th>
    <th>Destination</th>
    <th>Price</th>
</tr></thead>`;
console.log('Entered heed to tInfoTrav');
///Array with travle table information
let destinations = [
    {travCode:1, destination:'Paris', price:950},
    {travCode:2, destination:'Buenos Ires', price:687},
    {travCode:3, destination:'Antwerpen', price:153},
    {travCode:4, destination:'Kiyev', price:820},
    {travCode:5, destination:'London', price:90},
]
///Insert destinations information from array to the info table
let template = `<tr><td>#TRCODE</td><td> #DEST</td><td> #PRICE</td></tr>`;
destinations.forEach(element => {
    let temp = template
        .replace('#TRCODE', element.travCode)
        .replace('#DEST', element.destination)
        .replace('#PRICE', element.price)
    document.getElementById('tInfoTrav').innerHTML += temp;
});
console.log('Entered destinations array to tInfoTrav');

///Table of orders
let orderTableHeader = `<thead><tr>
<th>Order ID</th>
<th>Name</th>
<th>ID</th>
<th>Destination</th>
<th>Passengers</th>
<th>Price</th>
</tr></thead>`;
document.getElementById('listOrders').innerHTML = orderTableHeader;
document.getElementById('listOrdersByName').innerHTML = orderTableHeader;
console.log('Entered heed to Orders table');
let orderTemplate = `<tr><td>#ORDERID</td><td>#NAME</td><td>#ID</td><td>#DESTINATION</td><td>#PASSENGERS</td><td>#PRICE</td></tr>`;
let orderTemp = {name: '', PersonalID: '', TravleID: 0, passengers: 0};
let orders = [
    {name: 'Moshe', PersonalID: '5092', TravleID: 1, passengers: 1},
    {name: 'Moshe', PersonalID: '5092', TravleID: 3, passengers: 2},
    {name: 'Chayim', PersonalID: '6579', TravleID: 5, passengers: 3},
    {name: 'Meir', PersonalID: '9513', TravleID: 4, passengers: 4},
];
orders.forEach(obj => orderUpdate(obj.name, obj.PersonalID, obj.TravleID, obj.passengers));
function orderUpdate(name, PersonalID, TravleID, passengers){
    orderTemp.name = name;
    orderTemp.PersonalID = PersonalID;
    orderTemp.TravleID = TravleID;
    orderTemp.passengers = passengers;
    orders[orders.length] = orderTemp;
    console.log('Entered order info into orderTemp object');
    let getTravIndex = getIndex(destinations, TravleID);
    // let getTravIndex = destinations.map(findIndex() );
    console.log('Got array of indexs : '+getTravIndex);
    
    
    document.getElementById('listOrders').innerHTML += orderTemplate
        .replace('#ORDERID', orders.length)
        .replace('#NAME', name)
        .replace('#ID', PersonalID)
        .replace('#DESTINATION',  destinations[getTravIndex].destination)
        .replace('#PASSENGERS', passengers)
        .replace('#PRICE', destinations[getTravIndex].price * passengers)
    // console.log(orders, orders.length);
}
function getIndex(array, data) {
    let count = -1;
    let index = [];
    array.forEach(element => {
        count++;
        // console.log(element)
        if (element.travCode == data) {
            console.log('element index '+count);
            index.push(count);
        }
    });
    // count = -1;
    return(index);    
}
function findOrders(detail) {
    let getOrdersIndex = getIndex(orders, detail);
    console.log(getOrdersIndex);
    console.log(getOrdersIndex);
    
    getOrdersIndex.forEach(element => {
        document.getElementById('listOrdersByName').innerHTML += orders[element];
    });
    
}