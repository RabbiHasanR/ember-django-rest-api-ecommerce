import Component from '@ember/component';

export default Component.extend({
    classNames: ['collapsible-box'],
    isOpen: true,
    actions: {
        open() {
            this.set('isOpen', true);
        },
        close() {
            this.set('isOpen', false);
        }
    }
});
