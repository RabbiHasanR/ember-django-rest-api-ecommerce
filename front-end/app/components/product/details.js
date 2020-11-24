import Component from '@ember/component';

export default Component.extend({

    actions: {
        changeColor(color) {
            this.onChangeColor(color);
        }
    }
});
