var
	mongoose = require('mongoose');

var placeSchema = mongoose.Schema({
    context: String,
    _type: String,
    url: String,
    name: String,
    logo: String,
    image: String,
    email: String,
    telephone: String,
    address: {
        _type: String,
        addressLocality: String,
        addressRegion: String,
        postalCode: String,
        streetAddress: String,
        addressDistrict: String
    },
    openingHours: [
        String
    ],
    geo: {
        _type: String,
        latitude: String,
        longitude: String
    },
    acceptsReservations: Boolean,
    menu: String,
    currenciesAccepted: String,
    paymentAccepted: String,
    priceRange: String,
    servesCuisine: [String],
    aggregateRating: {
        _type: String,
        ratingValue: String,
        reviewCount: String
    },
    review: [
        {
            _type: String,
            author: String,
            datePublished: String,
            name: String,
            reviewBody: String,
            reviewRating: String
        }
    ],
    stamps: [
        {
            _type: String,
            name: String,
            description: String
        }
    ]
});
module.exports = mongoose.model('Place', placeSchema);