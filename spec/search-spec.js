describe('search', function(){
    'use strict';

    it('should send a post request', function(){
        spyOn($, 'post');
        search('location-service-url','mel');
        expect($.post).toHaveBeenCalled();
    })
});
