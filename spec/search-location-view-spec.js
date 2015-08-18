describe('search view', function(){
    'use strict';

    it('should render the search result', function(){
        var container = $('<div class="panel large-12 columns">');
        var searchResult = new SearchResult(container);
        expect(searchResult.render).toBeDefined();

        searchResult.render({'name': 'beijing', 'description': 'desc'});
        expect($(container).find('h5')).toContainText('beijing');
        expect($(container).find('h6')).toContainText('desc');
    })
});