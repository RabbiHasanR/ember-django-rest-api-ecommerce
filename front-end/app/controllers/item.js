import Controller from '@ember/controller';

export default Controller.extend({
    init() {
        this._super(...arguments);
        this.set('isZoomed', false);
    },

    actions: {

        toggleZoom() {
            this.set('isZoomed', !this.isZoomed);
            console.log('image comp zoom:', !this.isZoomed);
        },
        onChangeColor(newColor) {
            this.set('color', newColor);
            let model = this.get('model');
            const image = model.colors.find(({ color }) => color === this.color).image;
            this.set('productImage', image);
        }
    }
});
