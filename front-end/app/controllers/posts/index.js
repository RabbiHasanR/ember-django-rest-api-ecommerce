import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { all } from 'rsvp';

export default Controller.extend({
    queryParams: ['sortProps', 'isAsending', 'pageNumber', 'pageSize', 'columnsUsed'],
    sortProps: ['createdAt'],
    isAsending: false,
    props: computed('sortProps', 'isAsending', function() {
        if(this.isAsending){
            return this.sortProps
        } else {
            return [`${this.sortProps[0]}:desc`]
        }
    }),
    sortedPosts: computed.sort('model', 'props') ,
    availableColumns: [
        {'title': 'Title', 'property': 'title', 'display': 'plain'},
        {'title': 'Author', 'property': 'author', 'display': 'plain'},
        {'title': 'Created', 'property': 'createdAt', 'display': 'date'},
        {'title': 'Body', 'property': 'body', 'display': 'plain'},
    ],
    columnsUsed: [
        'title',
        'author'
    ],
    columns: computed('availableColumns','columnsUsed.@each', function() {
        const controller = this;
        // return this.availableColumns.filter(function(column, index, ennumerable) {
        //     return controller.columnsUsed.includes(column.property);
        // });
        return this.columnsUsed.map(function(columnProperty) {
            return controller.availableColumns.filter(function(column) {
                return columnProperty === column.property;
            })[0];
        });
    }),
    pageNumber: 0,
    pageSize: 10,
    possiblePageSize: [10, 25, 50, 100],
    pages: computed('sortedPosts', 'pageSize', 'isAsending', function() {
        const pages = []
        const arrangedContent = this.sortedPosts;
        while(arrangedContent.length > 0) {
            pages.push(arrangedContent.splice(0, this.pageSize));
        }
        return pages;
    }),

    paginatedContent: computed('pages', 'pageNumber', function() {
        return this.pages[this.pageNumber];
    }),
    // actions: {
    //     sortBy(sortProperty, isDesending) {
    //         if(isDesending){
    //             this.set('sortProps', [sortProperty]);
    //             this.set('isAsending', false);
    //         }
    //         else {
    //             this.set('sortProps', [sortProperty]);
    //             this.set('isAsending', true);
    //         }
            
    //     }
    // }

    actions: {
        previousPage() {
            if(this.pageNumber > 0) {
                this.set('pageNumber', this.pageNumber - 1);
            }
        },
        nextPage() {
            if(this.pageNumber + 1 < this.pages.length) {
                this.set('pageNumber', this.pageNumber + 1);
            }
        },
        cahngePageSize(newSize) {
            console.log('page Size',this.get('pageSize'));
            console.log('page number',this.get('pageNumber'));
            let currentOffset = this.get('pageSize') * this.get('pageNumber');
            console.log('current offset', currentOffset);
            let newPageNumber = Math.floor(currentOffset / newSize);
            console.log('page Number', newPageNumber);
            this.set('pageNumber', newPageNumber);
            this.set('pageSize', newSize);
        },
        moveLeft(property) {
            const columns = this.columnsUsed;
            let index = columns.indexOf(property);
            columns.removeObject(property);
            if(index === 0) {
                columns.insertAt(index, property);
            } else {
                columns.insertAt(index - 1, property);
            }

        },
        moveRight(property) {
            const columns = this.columnsUsed;
            let index = columns.indexOf(property);
            columns.removeObject(property);
            if(columns.length > index) {
                columns.insertAt(index + 1, property);
            } else {
                columns.insertAt(index, property);
            }
        },
        createRandomPost() {
            const counter = 200;
            let savedPosts = [];

            for (let i = 0; i < counter; i++) {

                // Collect all Promise in an array
                savedPosts.push(this._saveRandomPost());
            }

            all(savedPosts)
            .then(() => {
                console.log('Save fake post done');
                this.transitionToRoute('posts');
            });
        }
    },
    _saveRandomPost() {
        return this.store.createRecord('post').randomize().save();
      },

});
