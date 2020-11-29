import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({

    cart: service('shopping-cart'),

    itemCount: computed('cart.items.@each.count', function() {
        return this.cart.items.reduce((count, item) => {
            return count += item.count;
          }, 0);
    }),


})