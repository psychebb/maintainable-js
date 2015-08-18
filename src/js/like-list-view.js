function LikeList (container) {
    this.render = function(data){
        var tpl = _.template("<li class='liked'><%= name %></li>");
        new Render(container).render(tpl, data);
    }
}