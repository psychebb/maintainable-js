function SearchResult(view) {
    this.render = function(data){
        _.each(data, function(value, key, list){
            view.render(value);
        })
    };


    this.handler = function(){
        $('.like.button').click(function(){
                $(document).trigger('like');
            });
    }
}