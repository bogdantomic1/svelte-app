import { writable } from "svelte/store";

export const formType = writable("Travel");
export const currentStep = writable(1);

/* TRAVEL FORM */
export const Numberofpeople = writable(206450000);
export const Startingdayofinsurance = writable(new Date());
export const Durationofinsurance = writable(206450002);
export const Durationoftrip = writable(206450000);
export const Riskexposure = writable(206450000);
export const Packet = writable(206450000);

export const Taxnumber = writable("");
export const City = writable("");
export const Street = writable("");
export const HouseNumber = writable("");
export const GenderCT = writable(1);

export const FirstName = writable("");
export const LastName = writable("");
export const DateOfbirth = writable(new Date());
export const Email = writable("");
export const PhoneNumber = writable("");

/* ACCIDENT FORM */
export const AccidentStartingdayofinsurance = writable(new Date());
export const AccidentDurationofinsurance = writable(206450000);
export const AccidentNumberofpeople = writable(0);
export const AccidentPacket = writable(206450000);
export const AccidentPersonalInsurance = writable(206450002);
export const AccidentRegisteredAthlete = writable(206450000);

export const AccidentTaxnumber = writable("");
export const AccidentCity = writable("");
export const AccidentStreet = writable("");
export const AccidentHouseNumber = writable("");

export const AccidentFirstName = writable("");
export const AccidentLastName = writable("");
export const AccidentDateOfbirth = writable(new Date());
export const AccidentEmail = writable("");
export const AccidentGenderCT = writable(1);
