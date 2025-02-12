<script>
    import { currentStep, Numberofpeople, Startingdayofinsurance, Durationofinsurance, Durationoftrip, Riskexposure, Packet, Taxnumber, City, Street, HouseNumber, GenderCT, FirstName, LastName, DateOfbirth, Email, PhoneNumber } from './store.js'
</script>

<style>
    #fakeForm { 
        display: none
        }
</style>

<form id="fakeForm">
    <label for="Numberofpeople">Numberofpeople</label>
    <input type="text" id="Numberofpeople" name="Numberofpeople" value={$Numberofpeople}>
    <label for="Startingdayofinsurance">Startingdayofinsurance:</label>
    <input type="date" id="Startingdayofinsurance" name="lnamStartingdayofinsurancee" value={$Startingdayofinsurance}>
    <label for="Durationofinsurance">Durationofinsurance:</label>
    <input type="text" id="Durationofinsurance" name="Durationofinsurance" value={$Durationofinsurance}>
    <label for="Durationoftrip">Durationoftrip:</label>
    <input type="text" id="Durationoftrip" name="Durationoftrip" value={$Durationoftrip}>
    <label for="Riskexposure">Riskexposure:</label>
    <input type="text" id="Riskexposure" name="Riskexposure" value={$Riskexposure}>
    <label for="Packet">Packet:</label>
    <input type="text" id="Packet" name="Packet" value={$Packet}>
    <label for="Taxnumber">Taxnumber:</label>
    <input type="text" id="Taxnumber" name="Taxnumber" value={$Taxnumber}>
    <label for="City">City:</label>
    <input type="text" id="City" name="City" value={$City}>
    <label for="Street">Street:</label>
    <input type="text" id="Street" name="Street" value={$Street}>
    <label for="HouseNumber">HouseNumber:</label>
    <input type="text" id="HouseNumber" name="HouseNumber" value={$HouseNumber}>
    <label for="GenderCT">GenderCT:</label>
    <input type="text" id="GenderCT" name="GenderCT" value={$GenderCT}>
    <label for="FirstName">FirstName:</label>
    <input type="text" id="FirstName" name="FirstName" value={$FirstName}>
    <label for="LastName">LastName:</label>
    <input type="text" id="LastName" name="LastName" value={$LastName}>
    <label for="DateOfbirth">DateOfbirth:</label>
    <input type="date" id="DateOfbirth" name="DateOfbirth" value={$DateOfbirth}>
    <label for="FirstName">Email:</label>
    <input type="text" id="Email" name="Email" value={$Email}>
    <label for="PhoneNumber">PhoneNumber:</label>
    <input type="text" id="PhoneNumber" name="PhoneNumber" value={$PhoneNumber}>
    
    <input type="submit" id="submitForm" value="Submit">
</form>