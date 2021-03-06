define(['jquery', 'hbs!templates/browse/contents/leaf_main', 'backbone', 'views/browse/contents/Item', 'marionette', 'backbone.syphon'],
    function($, template, Backbone, ItemView) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.CompositeView.extend({
            template: template,
            itemView: ItemView,
            itemViewContainer: ".show_items",
            events: {
                "submit form": "onSubmitForm"
            },
            onSubmitForm: function(e) {
                e.preventDefault();
                var data = Backbone.Syphon.serialize(this);
                this.trigger("search", data);
            }
        });
    });