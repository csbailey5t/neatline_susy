$(document).ready(function(){
    'use strict';

    $('#feed').FeedEk({
        FeedUrl: 'http://www.scholarslab.org/tag/neatline/feed/',
        MaxCount: 3,
        ShowDesc: true,
        DescCharacterLimit: 100,
        ShowPubDate: false
    });
});
