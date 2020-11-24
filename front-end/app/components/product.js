import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        // console.log('product:', this.product.colors[0].image);
        this.set('productImage', this.product.colors[0].image)
    },
});
