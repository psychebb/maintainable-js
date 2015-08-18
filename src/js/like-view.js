function LikeView(container){
    this.render = function(data){
        var tpl = _.template("<a href='#' class='<%= like %> button tiny right'><%= like %></a>");
        new Render(container).render(tpl, data);
    }
}