import customer from './customer.module'
import 'angular';
import 'angular-mocks';

describe('customer module ', function(){
    
    it(' should have named as `customer`', function(){
        expect(customer.name).toEqual('customer')
    });



});