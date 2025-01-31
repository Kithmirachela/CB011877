document.addEventListener('DOMContentLoaded', function() {
    const events = [
        {
          "title": "Urban Farming Basics",
          "date": "March 5, 2025",
          "price": 50,
          "description": "Learn the fundamentals of urban farming, from setting up small-scale gardens to growing your own food in the city.",
        },
        {
          "title": "Ethical Animal Care",
          "date": "March 12, 2025",
          "price": 60,
          "description": "A hands-on workshop on providing ethical care for farm animals, from feeding to health management.",
        },
        {
          "title": "Organic Gardening Techniques",
          "date": "March 19, 2025",
          "price": 45,
          "description": "Learn how to create an organic garden in your own backyard using sustainable methods.",
        }
    ];

    const eventsContainer = document.querySelector('.upcoming_workshop');

    events.forEach(event => {
        // Create a new div for each event
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        
        // Add the event content to the div
        eventDiv.innerHTML = `
            <h2>${event.title}</h2>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Price:</strong> $${event.price}</p>
            <p>${event.description}</p>
        `;
        
        // Append the event div to the container
        eventsContainer.appendChild(eventDiv);
    });


    let map;

document.getElementById("find").addEventListener("click", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("output").innerHTML = "Geolocation is not supported by this browser.";
    }
});

function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    
    document.getElementById("output").innerHTML = 
        `Latitude: ${lat} <br> Longitude: ${lng}`;

    // Load Google Map
    const location = { lat: lat, lng: lng };
    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 15,
    });

    // Add Marker
    new google.maps.Marker({
        position: location,
        map: map,
        title: "You are here!",
    });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("output").innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("output").innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("output").innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("output").innerHTML = "An unknown error occurred.";
            break;
    }
}

});


