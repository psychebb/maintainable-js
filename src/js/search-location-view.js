function SearchResult (container) {
    this.render = function(data){
        var tpl = _.template("<h5><%= name %></h5><h6><%= description %></h6>");
        container.append(tpl(data));
    }
}