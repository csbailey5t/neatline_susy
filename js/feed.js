$(document).ready(function(){
       $('#feed').rssfeed('http://www.scholarslab.org/tag/neatline/feed/', {
            limit: 3,
            titletag: 'h3',
            snippet: true,
            more: true,
            header: false,
          });
});
