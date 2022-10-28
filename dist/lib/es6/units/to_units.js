// Some dummy data on bonta brand names and their units per vial
//const bonta_data = {
//    botox: 100,
//    dysport: 500,
//    bocouture: 50,
//};
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
/** Calculates total bont-a units inside a syringe, given a brand name and the product dilutioon. */
export var units_per_syringe = function (brand_name, dilution, syringe_size) {
    if (brand_name === void 0) { brand_name = "botox"; }
    if (dilution === void 0) { dilution = 2.5; }
    if (syringe_size === void 0) { syringe_size = 0.5; }
    var brand_units = to_units(brand_name); // get the brand's units per vial
    return (syringe_size * brand_units) / dilution;
};
