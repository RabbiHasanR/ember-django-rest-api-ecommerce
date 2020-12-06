import Component from '@ember/component';

export default Component.extend({
    tagName: 'div',
    classNames: ['uploader', 'dropzone'],
    isDragging: Ember.computed.gt('dragCounter', 0),
    classNameBindings:['isDragging'],
    dragCounter: 0,
    dragEnter() {
        this.incrementProperty('dragCounter');
        // this.set('isDragging', true);
    },
    dragLeave() {
        this.decrementProperty('dragCounter');
        // this.set('isDragging', false);
    },
    dragOver(event) {
        event.preventDefault();
    },
    drop(event) {
        event.preventDefault();
        this.set('dragCounter', 0);
        var file = event.dataTransfer.files[0];
        this.fileInputChanged(file);
    }
});
