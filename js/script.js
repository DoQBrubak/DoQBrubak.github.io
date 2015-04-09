
function loadData() {
    // These are jQuery objects the function will use
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // These are the query terms loaded from the form
    var $requestStreet = $('#street').val();
    var $requestCity = $('#city').val();

    // Old data must be cleared before new requests return
    $wikiElem.text("");
    $nytElem.text("");

    // Now query google streetview and use result as background image    
    var imgUrl = "https://maps.googleapis.com/maps/api/streetview?location="+
        $requestStreet + ", " + $requestCity + "&size=400x400&pitch=-5&fov=90";
    // Note the raw HTML string - from end of script.js
    $body.append(HTMLbgImg.replace('%data%', imgUrl));

    /* Now query NYT API and use results to populate #nytimes-articles list.
     * I first got a key. Refer: http://developer.nytimes.com/apps/mykeys
     */
    var nytApiKey = '937a887a873a34ee75efafe87138b5b0:16:71810016';
    // For API query format refer: http://developer.nytimes.com/io-docs
    var nytApiUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json'+
        '?callback=svc_search_v2_articlesearch'+
        '&q='+$requestCity+
        '&f1=headline,web_url,snippet'+
        '&sort=newest'+
        '&api-key='+nytApiKey;
    /* The following two lines are equivalent means of querying the API,
     * the 2nd is shorthand for the 1st (commented version).
     */
    //$.ajax({url: nytApiUrl,dataType: 'json',success: function(data){console.log(data)}});
   
    $.getJSON(nytApiUrl, function(data){
        var drd = data.response.docs;
        for (var i=0; i < drd.length; i++){
            console.log(drd[i].headline.main + ': ' + drd[i].pub_date);
    }})

    return false;
};

function loadUdac() {
    var apiUrl = 'https://www.udacity.com/public-api/v0/courses';
    var randDegree = Math.round(Math.random()*4);
    var randTrack = Math.round(Math.random()*6);

    $.getJSON(apiUrl, function(result){
        $('#udac-nd').html(result.degrees[randDegree]['title']);
        $('#udac-track').html(result.tracks[randTrack]['name']);
    });
}



$('#form-container').submit(loadData);
$('#udac-button').click(loadUdac);



// loadData();






var HTMLbgImg = '<img class="bgimg" src="%data%">';

