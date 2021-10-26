class Customer{
    constructor(id,customerNumber){
        this.id=id
        this.customerNumber=customerNumber  
    }
}

let customer=new Customer(1,"12345");


//prototyping
customer.name="İrem Uludirik"
console.log(customer.name)

Customer.bisey="bir sey"
console.log(Customer.bisey)

console.log(customer.customerNumber)



class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
    }
}


class CorparateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
}
}
