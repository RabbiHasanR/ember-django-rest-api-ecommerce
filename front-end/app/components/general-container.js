import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    cart: service('shopping-cart'),
    
    get itemCount(){
        return this.cart.items.reduce((total, item) => {
            return total += item.count;
          }, 0); 
    }

})