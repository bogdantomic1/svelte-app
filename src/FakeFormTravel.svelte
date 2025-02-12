<script>
    import { currentStep, Numberofpeople, Startingdayofinsurance, Durationofinsurance, Durationoftrip, Riskexposure, Packet, Taxnumber, City, Street, HouseNumber, GenderCT, FirstName, LastName, DateOfbirth, Email, PhoneNumber } from './store.js'
</script>

<style>
    #fakeFormTravel { 
        display: none
    }
</style>

<form id="fakeFormTravel" style="display:none">
    <label for="Numberofpeople">Numberofpeople</label>
    <select value={$Numberofpeople} id="Numberofpeople" name="Numberofpeople" >
        <option value="206450000">Individually</option>
        <option value="206450001">Family</option>
        <option value="206450002">Group</option>
    </select>
    <label for="Startingdayofinsurance">Startingdayofinsurance:</label>
    <input type="date" id="Startingdayofinsurance" name="lnamStartingdayofinsurancee" value={$Startingdayofinsurance}>
    <label for="Durationofinsurance">Durationofinsurance:</label>
    <select value={$Durationofinsurance} id="Durationofinsurance" name="Durationofinsurance" >
        <option value="206450002">2 days</option>
        <option value="206450003">3 days</option>
        <option value="206450004">5 days</option>
        <option value="206450005">8 days</option>
        <option value="206450006">15 days</option>
        <option value="206450007">21 days</option>
        <option value="206450008">30 days</option>
        <option value="206450009">60 days</option>
        <option value="206450010">1 year</option>
      </select>
    <label for="Durationoftrip">Durationoftrip:</label>
    <select value={$Durationoftrip} id="Durationoftrip" name="Durationoftrip" >
        <option value="206450000">Less than 90 days</option>
        <option value="206450001">90 or more days</option>
    </select>
    <label for="Riskexposure">Riskexposure:</label>
    <select value={$Riskexposure} id="Riskexposure" name="Riskexposure" >
        <option value="206450000">Yes</option>
        <option value="206450001">No</option>
      </select>
    <label for="Packet">Packet:</label>
    <select value={$Packet} id="Packet" name="Packet">
        <option value="206450000">A</option>
        <option value="206450001">B</option>
        <option value="206450002">C</option>
      </select>
    <label for="Taxnumber">Taxnumber:</label>
    <input type="text" id="Taxnumber" name="Taxnumber" value={$Taxnumber}>
    <label for="City">City:</label>
    <input type="text" id="City" name="City" value={$City}>
    <label for="Street">Street:</label>
    <input type="text" id="Street" name="Street" value={$Street}>
    <label for="HouseNumber">HouseNumber:</label>
    <input type="text" id="HouseNumber" name="HouseNumber" value={$HouseNumber}>
    <label for="GenderCT">GenderCT:</label>
    <select value={$GenderCT} id="GenderCT" name="GenderCT" >
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Undefined</option>
      </select>
    <label for="FirstName">FirstName:</label>
    <input type="text" id="FirstName" name="FirstName" value={$FirstName}>
    <label for="LastName">LastName:</label>
    <input type="text" id="LastName" name="LastName" value={$LastName}>
    <label for="DateOfbirth">DateOfbirth:</label>
    <input type="date" id="DateOfbirth" name="DateOfbirth" value={$DateOfbirth}>
    <label for="Email">Email:</label>
    <input type="text" id="Email" name="Email" value={$Email}>
    <label for="PhoneNumber">PhoneNumber:</label>
    <input type="text" id="PhoneNumber" name="PhoneNumber" value={$PhoneNumber}>
    
    <input type="submit" id="submitForm" value="Submit">
</form>