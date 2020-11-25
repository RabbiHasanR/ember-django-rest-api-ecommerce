import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    cart: service('shopping-cart'),

    actions: {
        changeColor(color) {
            this.onChangeColor(color);
        },
        addToCart() {
            this.cart.add({
                name: this.name,
                color: this.color,
                image: this.colors.find(colorInfo => colorInfo.color === this.color).image,
                price: this.price.current
            });
        }
    }
});
