describe('search result', function(){
    'use strict';
    beforeEach(function(){
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    })

    it('should render locations', function(){
        var container = $('<div class="panel large-12 columns">');
        var view = new SearchLocationView(container);
        var searchResults = new SearchResult(view);

        spyOn(view, 'render');
        searchResults.render([{'name': 'beijing', 'description': 'desc'},{'name': 'nanjing', 'description': 'desc'}])
        expect(view.render).toHaveBeenCalledWith({'name': 'beijing', 'description': 'desc'});
        expect(view.render).toHaveBeenCalledWith({'name': 'nanjing', 'description': 'desc'});
    });

    it('should trigger like event when click the button', function(){
        loadFixtures('like-button.html');
        var container = $('<div class="panel large-12 columns">');
        var view = new SearchLocationView(container);
        var searchResults = new SearchResult(view);
        searchResults.handler();
        
        spyOnEvent($(document), 'like');
        $('.like.button').click();

        expect('like').toHaveBeenTriggeredOn($(document));
    })
});