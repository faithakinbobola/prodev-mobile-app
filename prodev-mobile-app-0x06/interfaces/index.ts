export interface PropertyListingProps {
    propertyName: string,
    location: PropertyLocationProps,
    rate: number,
    currency: string,
    amount: number,
    favorite: boolean,
    image?: string
}

export interface PropertyLocationProps {
    street: string,
    city: string,
    country: string
}

export interface PropertListing {
    listings: PropertyListingProps[]
}