// Some dummy data on bonta brand names and their units per vial
//const bonta_data = {
//    botox: 100,
//    dysport: 500,
//    bocouture: 50,
//};


/** Accepts a BoNTA brand name string, returns its units per vial */
export const to_units = (brand_name: string = "botox"): number => {
    // Sanitize user's input
    const brand = brand_name.trim().toLowerCase();

    // Find if the brand_name passed is one of the data above and
    // return the units, otherwise return 0
    switch(brand) {
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
export const units_per_syringe = (brand_name: string = "botox", dilution: number = 2.5, syringe_size: number = 0.5) => {
    const brand_units = to_units(brand_name); // get the brand's units per vial
    return (syringe_size * brand_units) / dilution;
};

