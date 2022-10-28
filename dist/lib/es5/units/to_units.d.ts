/** Accepts a BoNTA brand name string, returns its units per vial */
export declare const to_units: (brand_name?: string) => number;
/** Calculates total bont-a units inside a syringe, given a brand name and the product dilutioon. */
export declare const units_per_syringe: (brand_name?: string, dilution?: number, syringe_size?: number) => number;
