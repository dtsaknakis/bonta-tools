export type Brand = {
    name: string;
    unitsPerVial: number;
    company: string;
}

export const products: Array<Brand> = [
    {
        name: "botox",
        unitsPerVial: 100,
        company: "Allergan Pharmaceuticals Ltd."
    },
    {
        name: "dysport",
        unitsPerVial: 500,
        company: "Ipsen Ε.Π.Ε."
    },
    {
        name: "bocouture",
        unitsPerVial: 50,
        company: "Merz Pharmaceuticals GmbH"
    },
];

