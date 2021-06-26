const customers = ['Mustafa', 'Mahmood', 'Hasanain'];

const activeCustomers = ['Mustafa', 'Mahmood'];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);