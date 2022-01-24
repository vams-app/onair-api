//import { Aircraft, Flight, Airport, Fbo, Company, Job, Member, VirtualAirline, } from ".";

export interface Api {
    getAircraftFlights: any,
    getAircraft: any,
    getAirport: any,
    getCompanyFbos: any,
    getCompanyFleet: any,
    getCompanyFlights: any,
    getCompanyJobs: any,
    getCompanyEmployees: any,
    getCompany: any,
    getFlight: any,
    getVirtualAirlineMembers: any,
    getVirtualAirline: any,
}

export interface OnAirApiConfig {
    apiKey: string,
    world: string,
    companyId?: string | undefined,
    vaId?: string | undefined,
}