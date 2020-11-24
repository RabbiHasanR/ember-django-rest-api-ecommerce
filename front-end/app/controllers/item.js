import Controller from '@ember/controller';

export default Controller.extend({

    get productImage() {
        let model = this.get('model');
        return model.colors.find(({ color }) => color === this.color).image;
    },

    actions: {
        onChangeColor(newColor) {
            this.set('color', newColor);
        }
    }
});
