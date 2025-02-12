<script>
    import { AccidentStartingdayofinsurance, AccidentDurationofinsurance, AccidentNumberofpeople, AccidentPacket, AccidentPersonalInsurance, AccidentRegisteredAthlete, AccidentTaxnumber, AccidentCity, AccidentStreet, AccidentHouseNumber, AccidentFirstName, AccidentLastName, AccidentDateOfbirth, AccidentEmail, AccidentGenderCT } from './store.js'
</script>

<style>
    #fakeFormAccident { 
        display: none
    }
</style>

<form id="fakeFormAccident">
    <label for="Startingdayofinsurance">Startingdayofinsurance:</label>
    <input type="date" id="Startingdayofinsurance" name="lnamStartingdayofinsurancee" value={$AccidentStartingdayofinsurance}>
    <label for="Durationofinsurance">Durationofinsurance:</label>
    <select value={$AccidentDurationofinsurance} id="Durationofinsurance" name="Durationofinsurance" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <option value="206450000">1 year with automatic renewal</option>
        <option value="206450001">1 year without automatic renewal</option>
      </select>
    <label for="Numberofpeople">Numberofpeople</label>
    <input type="number" id="Numberofpeople" name="Numberofpeople" value={$AccidentNumberofpeople}>
    <label for="Packet">Packet:</label>
    <select value={$AccidentPacket} id="Packet" name="Packet" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <option value="206450000">Small package</option>
        <option value="206450001">Big package</option>
        <option value="206450002">Comfort package</option>
    </select>
    <label for="PersonalInsurance">PersonalInsurance:</label>
    <select value={$AccidentPersonalInsurance} id="PersonalInsurance" name="PersonalInsurance" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <option value="206450002">Yes</option>
        <option value="206450003">No</option>
    </select>
    <label for="RegisteredAthlete">RegisteredAthlete:</label>
    <select value={$AccidentRegisteredAthlete} id="RegisteredAthlete" name="RegisteredAthlete" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <option value="206450000">Yes</option>
        <option value="206450001">No</option>
    </select>
    <label for="Taxnumber">Taxnumber:</label>
    <input type="text" id="Taxnumber" name="Taxnumber" value={$AccidentTaxnumber}>
    <label for="City">City:</label>
    <input type="text" id="City" name="City" value={$AccidentCity}>
    <label for="Street">Street:</label>
    <input type="text" id="Street" name="Street" value={$AccidentStreet}>
    <label for="HouseNumber">HouseNumber:</label>
    <input type="text" id="HouseNumber" name="HouseNumber" value={$AccidentHouseNumber}>
    <label for="FirstName">FirstName:</label>
    <input type="text" id="FirstName" name="FirstName" value={$AccidentFirstName}>
    <label for="LastName">LastName:</label>
    <input type="text" id="LastName" name="LastName" value={$AccidentLastName}>
    <label for="DateOfbirth">Date of birth:</label>
    <input type="date" id="DateOfbirth" name="DateOfbirth" value={$AccidentDateOfbirth}>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" value={$AccidentEmail}>

    <label for="GenderCT">GenderCT:</label>
    <select value={$AccidentGenderCT} id="AccidentGenderCT" name="AccidentGenderCT" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Undefined</option>
      </select>    
    <input type="submit" id="submitForm" value="Submit">
</form>