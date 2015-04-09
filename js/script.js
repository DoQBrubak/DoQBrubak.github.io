var nytApiKey = '937a887a873a34ee75efafe87138b5b0:16:71810016'


function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    
    var $requestStreet = $('#street').val();
    var $requestCity = $('#city').val();

    var imgUrl = "https://maps.googleapis.com/maps/api/streetview?location="+
        $requestStreet + ", " + $requestCity + "&size=400x400&pitch=-5&fov=90";

    $body.append(HTMLbgImg.replace('%data%', imgUrl));
    console.log(imgUrl);

    $.getJSON();


    // load streetview

    // YOUR CODE GOES HERE!

    return false;
};

function loadUdac() {
    var apiUrl = 'https://www.udacity.com/public-api/v0/courses';
    var randDegree = Math.round(Math.random()*4);
    var randTrack = Math.round(Math.random()*6);
    console.log('degree #: '+randDegree+'... track #: '+randTrack);

    $.getJSON(apiUrl, function(udacJSON){
        $('#udac-nd').html(udacJSON.degrees[randDegree]['title']);
        $('#udac-track').html(udacJSON.tracks[randTrack]['name']);
    });
}



$('#form-container').submit(loadData);
$('#udac-button').click(loadUdac);



// loadData();






var HTMLbgImg = '<img class="bgimg" src="%data%">';

