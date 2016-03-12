/**
 * Created by Freemahn on 12.03.2016.
 */
// counter starts at 0
Session.setDefault('counter', 0);

Template.hello.helpers({
    counter: function () {
        return Session.get('counter');
    }
});

Template.hello.events({
    'click button': function () {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
    }
});