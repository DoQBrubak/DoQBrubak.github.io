
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // query streetview and use result as background image    
    var $requestStreet = $('#street').val();
    var $requestCity = $('#city').val();
    var imgUrl = "https://maps.googleapis.com/maps/api/streetview?location="+
        $requestStreet + ", " + $requestCity + "&size=400x400&pitch=-5&fov=90";
    $body.append(HTMLbgImg.replace('%data%', imgUrl));

    // query NYT Article API and use results to populate #nytimes-articles <ul>
    var nytApiKey = '937a887a873a34ee75efafe87138b5b0:16:71810016';
    var nytApiUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json'+
    '?[q=%data1%&f1=headline,web_url,snippet,abstract&sort=newest]'+
    '&api-key='+nytApiKey;
    $.getJSON();



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

