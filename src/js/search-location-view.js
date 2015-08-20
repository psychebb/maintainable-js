function SearchLocationView (container) {
    this.render = function(data){
        var tpl = _.template("<h5><%= name %></h5><h6><%= description %></h6><a href='#' class='<%= like %> button tiny right'><%= like %></a>");
        new Render(container).render(tpl, data);
    }
}