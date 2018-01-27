(function($) {
  function new_map($el) {
    var $markers = $el.find(".marker");

    var args = {
      zoom: 16,
      center: new google.maps.LatLng(0, 0),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#444444"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              color: "#f2f2f2"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [
            {
              saturation: -100
            },
            {
              lightness: 45
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [
            {
              visibility: "simplified"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#4f595d"
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#344150"
            }
          ]
        }
      ]
    };

    var map = new google.maps.Map($el[0], args);

    map.markers = [];

    $markers.each(function() {
      add_marker($(this), map);
    });
    center_map(map);
    return map;
  }

  var MARKERS = [];
  function add_marker($marker, map) {
    var latlng = new google.maps.LatLng(
      $marker.attr("data-lat"),
      $marker.attr("data-lng")
    );
    var labelText = $marker.attr("data-label-text");
    var propId = $marker.attr("data-property-id");
    var withClick = $marker.is("[data-with-click]");
    var markerIcon = $marker.attr("data-icon") || "dark";

    var pins = {
      pink: {
        url: window.themeUrl + "/assets/img/pink-pin.svg"
        // anchor: new google.maps.Point(0, 100)
      },
      pinkWithCircle: {
        url: window.themeUrl + "/assets/img/pink-pin-with-circle.svg"
        // anchor: new google.maps.Point(0, 100)
      },
      dark: {
        url: window.themeUrl + "/assets/img/dark-pin.svg"
        // anchor: new google.maps.Point(0, 100)
      }
    };
    var label = labelText
      ? {
          text: labelText,
          color: "white",
          fontSize: "10px"
        }
      : null;

    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      icon: pins[markerIcon],
      label: label,
      propId: propId ? parseInt(propId) : undefined
    });
    MARKERS.push(marker);
    if (withClick) {
      marker.addListener("click", function(e) {
        var propId = this.propId;
        MARKERS.forEach(function(marker) {
          marker.setIcon(pins.dark);
        });
        if (propId) {
          this.setIcon(pins.pink);
          $("[data-prop-id]").removeClass("active");
          $("[data-prop-id=" + propId + "]").addClass("active");
        }
      });
    }

    map.markers.push(marker);

    if ($marker.html()) {
      var infowindow = new google.maps.InfoWindow({
        content: $marker.html()
      });

      google.maps.event.addListener(marker, "click", function() {
        infowindow.open(map, marker);
      });
    }
  }

  function center_map(map) {
    var bounds = new google.maps.LatLngBounds();

    $.each(map.markers, function(i, marker) {
      var latlng = new google.maps.LatLng(
        marker.position.lat(),
        marker.position.lng()
      );
      bounds.extend(latlng);
    });

    if (map.markers.length == 1) {
      map.setCenter(bounds.getCenter());
      map.setZoom(16);
    } else {
      map.fitBounds(bounds);
    }
  }

  var map = null;

  $(document).ready(function() {
    $(".acf-map").each(function() {
      map = new_map($(this));
    });
  });
})(jQuery);
