// Some dummy data on bonta brand names and their units per vial
var bonta_data = {
    botox: 100,
    dysport: 500,
    bocouture: 50,
};
/** Accepts a BoNTA brand name string, returns its units per vial */
export var to_units = function (brand_name) {
    if (brand_name === void 0) { brand_name = "botox"; }
    // Sanitize user's input
    var brand = brand_name.trim().toLowerCase();
    // Find if the brand_name passed is one of the data above and
    // return the units, otherwise return 0
    switch (brand) {
        case "botox":
            return 100;
        case "dysport":
            return 500;
        case "bocouture":
            return 50;
        default:
            return 0;
    }
};
