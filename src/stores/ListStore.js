import EventEmitter from 'events';

export const ListStore = Object.assign({}, EventEmitter.prototype, {
    items: [],

    getAll: function () {
        return this.items;
    },

    addNewItemHandler: function (text) {
        this.items.push(text);
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function (cb) {
        this.addListener('change', cb);
    }
});

