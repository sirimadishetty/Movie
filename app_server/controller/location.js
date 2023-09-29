/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('location-list', {
    title: 'Movietime',
    pageHeader: {
    title: 'Movietime',
    strapline: 'MovieTime Book your movie tickets online!'
    },
    sidebar: "Tired of standing in line to buy movie tickets? you can book your favourite movie tickets from nearby theatres.",
    locations: [{
    name: 'Asain muktha mall',
    address: 'Narapally, Ghatkesar',
    rating: 3,
    facilities: ['jailer', 'Heart of stone', 'kushi'],
    distance: '100m'
    }, {
    name: 'Inorbit mall',
    address: 'Mindspace, Madhapur, Hyderabad',
    rating: 4,
    facilities: ['jailer', 'Heart of stone', 'kushi'],
    distance: '200m'
    }, {
    name: 'DSL mall',
    address: 'Ramanthapur, uppal',
    rating: 2,
    facilities: ['jailer', 'Heart of stone', 'kushi'],
    distance: '250m'
    }]
    });
    };

module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
    title: 'Asain Muktha mall',
    pageHeader: {
    title: 'Asain Muktha mall'
    },
    sidebar: {
    context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
        
    callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    location: {
    name: 'Asain Muktha mall',
    address: 'Narapally, Ghatkesar',
    rating: 3,
    facilities: ['jailer', 'Heart of stone', 'kushi'],
    coords: {
    lat: 51.455041,
    lng: -0.9690884
    },
    openingTimes: [{
    days: 'Monday - Friday',
    opening: '7:00am',
    closing: '7:00pm',
    closed: false
    }, {
    days: 'Saturday',
    opening: '8:00am',
    closing: '5:00pm',
    closed: false
    }, {
    days: 'Sunday',
    closed: true
    }],
    reviews: [{
    author: 'Siri madishetty',
    rating: 5,
    timestamp: '16 July 2013',
    reviewText: 'What a great place. I can\'t say enough good things about it.'
    }, {
    author: 'Charlie Chaplin',
    rating: 3,
    timestamp: '16 June 2013',
    reviewText: 'Had a fun experience!'
    }]
        
    }
    });
    };

        module.exports.locationInfo1 = function(req, res) {
            res.render('location-info1', {
            title: 'Inorbit mall',
            pageHeader: {
            title: 'Inorbit mall'
            },
            sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
            },
            location: {
            name: 'Inorbit mall',
            address: 'Mindspace, Madhapur, Hyderabad',
            rating: 3,
            facilities: ['jailer', 'Heart of stone', 'kushi'],
            coords: {
            lat: 51.455041,
            lng: -0.9690884
            },
            openingTimes: [{
            days: 'Monday - Friday',
            opening: '7:00am',
            closing: '7:00pm',
            closed: false
            }, {
            days: 'Saturday',
            opening: '8:00am',
            closing: '5:00pm',
            closed: false
            }, {
            days: 'Sunday',
            closed: true
            }],
            reviews: [{
            author: 'Simon Holmes',
            rating: 5,
            timestamp: '16 July 2013',
            reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
            author: 'Charlie Chaplin',
            rating: 3,
            timestamp: '16 June 2013',
            reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
            
            }
            });
            };

            module.exports.locationInfo2 = function(req, res) {
                res.render('location-info2', {
                title: 'DSL mall',
                pageHeader: {
                title: 'DSL mall'
                },
                sidebar: {
                context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
                
                callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
                },
                location: {
                name:'DSL mall',
                address: 'Ramanthapur, uppal',
                rating: 3,
                facilities: ['jailer', 'Heart of stone', 'kushi'],
                coords: {
                lat: 51.455041,
                lng: -0.9690884
                },
                openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
                }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
                }, {
                days: 'Sunday',
                closed: true
                }],
                reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
                }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
                }]
                
                }
                });
                };

                module.exports.addReview = function(req, res) {
                    res.render('location-review-form', {
                    title: 'Review theatre on movietime',
                    pageHeader: {
                    title: 'Review theatre'
                    }
                    });
                    };
