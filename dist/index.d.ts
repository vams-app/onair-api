import { Company, Flight, Fbo, Aircraft, Job, VirtualAirline, Member, Airport, OnAirApiConfig, People, ShareHolder, VARole, CashFlow, IncomeStatement, BalanceSheet, FlightTrack, WorkOrder } from './types';
export * from './types';
export declare class OnAirApi {
    private ApiKey;
    private CompanyId;
    private VaId;
    constructor(config: OnAirApiConfig);
    getCompany(): Promise<Company>;
    getCompanyFleet(): Promise<Aircraft[]>;
    getCompanyFbos(): Promise<Fbo[]>;
    getCompanyFlights(page?: number, limit?: number): Promise<Flight[]>;
    getCompanyJobs(completed?: boolean): Promise<Job[]>;
    getCompanyEmployees(): Promise<People[]>;
    getCompanyCashFlow(): Promise<CashFlow>;
    getCompanyIncomeStatement(startDate?: string | undefined, endDate?: string | undefined): Promise<IncomeStatement>;
    getCompanyBalanceSheet(): Promise<BalanceSheet>;
    getCompanyMissionFlightTracks(): Promise<FlightTrack[]>;
    getCompanyWorkOrders(): Promise<WorkOrder[]>;
    getAircraft(aircraftId: string): Promise<Aircraft>;
    getAircraftFlights(aircraftId: string, page?: number, limit?: number): Promise<Flight[]>;
    getAirport(airportCode: string): Promise<Airport>;
    getFlight(flightId: string): Promise<Flight>;
    getVirtualAirline(): Promise<VirtualAirline>;
    getVirtualAirlineMembers(): Promise<Member[]>;
    getVirtualAirlineShareHolders(): Promise<ShareHolder[]>;
    getVirtualAirlineRoles(): Promise<VARole[]>;
    getEmployee(employeeId: string): Promise<People>;
}
export default OnAirApi;
