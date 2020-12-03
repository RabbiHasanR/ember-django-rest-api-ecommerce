import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    isSelectedSort: computed('selectedSorts', 'sortProperty', function() {
        return this.selectedSorts[0] === this.sortProperty;
    }),
    // upArrowHilighted: computed('isSelectedSort', 'isAsending', function() {
    //     return this.isSelectedSort && !this.isAsending;
    // }),
    // downArrowHilighted: computed('isSelectedSort', 'isAsending', function() {
    //     return this.isSelectedSort && this.isAsending;
    // }),
    sortProps: computed('sortProperty', function() {
        return [this.sortProperty];
    }),
    downArrow: '&#9660',
    upArrow: '&#9650',
    tagName: 'th',
    // actions: {
    //     sortBy(sortProperty, isDesending) {
    //         this.action(sortProperty, isDesending);
    //     }
    // },

    actions: {
        moveLeft() {
            this.moveLeft(this.sortProperty);
        },
        moveRight() {
            this.moveRight(this.sortProperty);
        }
    }
});
