/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-bottom'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function initialize() {
    var stylez = [
      {
        featureType: "all",
        stylers: [
          { hue: "#0000ff" },
          { saturation: -75 }
        ]
      },
      {
        featureType: "poi",
        elementType: "label",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    var latlng = new google.maps.LatLng(35.366814, 139.216807), // Stockholm
    
        mapOptions = {
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "Edited"] 
            },
			scrollwheel: false,
            zoom: 14,
            center: latlng
        },
        
        map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions),
        
        styledMapType = new google.maps.StyledMapType(stylez, {name: "Edited"}),
        
        marker = new google.maps.Marker({
            position: latlng, 
            map: map, 
            animation: google.maps.Animation.DROP,
            title:"Hello World!"
        }),
        
        infowindow = new google.maps.InfoWindow({
            content: "<div><img width='200px' height='200px' src='img/jtc-black.png'><p>Minamiyana 2-19-4,</p><p>Hadano-shi,Kanagawa</p><p>Japan</p><p>Tel : +81-80-8839-3596</p></div>"
        });
        
       
    
    function toggleBounce () {
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    
    // Add click listener to toggle bounce
    google.maps.event.addListener(marker, 'click', function () {
        toggleBounce();
        infowindow.open(map, marker);
        setTimeout(toggleBounce, 1500);
    });
}

// Call initialize -- in prod, add this to window.onload or some other DOM ready alternative
initialize();

$(function() {  

    jQuery.scrollSpeed(200, 800);

});

new WOW().init();