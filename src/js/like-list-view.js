function LikeList (container, data) {
    var alreadyInLikedPlaces = _.find($('#likedPlaces li'), function(list) { return list.textContent == data})
    if(!alreadyInLikedPlaces){
        this.like = function(data){
            var tpl = _.template("<li class='like'><%= name %></li>");
            new Render(container).render(tpl, data);
        }
    }
}