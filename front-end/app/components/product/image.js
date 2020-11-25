import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        // this.set('isZoom', false);
    },
    actions: {
        imageZoom() {
            // this.toggleZoom();
            this.sendAction('toggleZoom');
        }
    }
});
