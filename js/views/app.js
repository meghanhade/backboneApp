var app = app || {};

// Overall **AppView** is the top-level piece of UI.
app.AppView = Backbone.View.extend({
	// Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
	el: '#todoapp',
	
	statsTemplate: _.template($('#stats-template').html()),

	initialize: function(){
		this.allCheckbox = this.$('#toggle-all')[0];
		this.$input = this.$('#new-todo');
		this.$footer = this.$('#footer');
		this.$main = this.$('#main');

		this.listenTo(app.Todos, 'add', this.addOne);
		this.litenTo(app.Todos, 'reset', this.addAll);
	},

	addOne: function(todo){
		var view = new app.TodoView({model:todo});
		$('#todo-list').append(view.render().el);
	},

	addAll: function(){
		this.$('#todo-list').html('');
		app.Todos.each(this.addOne, this);
	}
});