import Component from '@ember/component';

export default Component.extend({
    tagName: 'button',
    click(event) {
        alert('Click event');
        return false;
    }
});
