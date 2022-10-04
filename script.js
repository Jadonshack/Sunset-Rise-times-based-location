function getCoordinates() {
    // Variables to pull value from inputs
    let latitude = document.getElementById('latitude').value;
    let longitude = document.getElementById('longitude').value;

    $.ajax(`https://api.sunrise-sunset.org/json?lat=${latitude}.72&lng=${longitude}.42&date=today`, {
        success: (coordinatesData) => {
            // Removing previous answer. Making up for my mistake on last the courses final ;)
            $('#sunrise').remove();
            $('#sunset').remove();
            $('#divider').remove();
            // Sunrise/sunset <P>'s (new elements)
            var sunrise = $(`<p>${coordinatesData.results.sunrise}</p>`);
            var sunset = $(`<p>${coordinatesData.results.sunset}</p>`);
            var divider = $(`<hr>`);
            // Setting id's for new elements
            $(sunrise).attr('id', 'sunrise');
            $(sunset).attr('id', 'sunset');
            $(divider).attr('id', 'divider');
            // Appending new elements to div
            $('#informationDiv').append(sunrise).append(sunset).append(divider);
        }
    });
};