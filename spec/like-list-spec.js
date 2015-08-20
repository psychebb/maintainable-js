describe('like list', function(){
    'use strict';
    beforeEach(function(){
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    });

    it('should add a liked places to list', function(){
        var container = $('<ul></ul>');
        var likeList = new LikeList(container);
        expect(likeList.like).toBeDefined();

        likeList.like({'name': 'beijing'});
        expect($(container).find('li.like')).toContainText('beijing');
    })

    it('should only contain one place', function(){
        loadFixtures('like-place.html');
        var container = $("<ul><li class='like'>beijing</li></ul>");
        var likeList = new LikeList(container,{'name': 'beijing'});
        spyOn(likeList,'like');

        expect(likeList.like).not.toHaveBeenCalled();
    })
});