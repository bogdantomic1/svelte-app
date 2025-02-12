<script>
    import { currentStep, Numberofpeople, Startingdayofinsurance, Durationofinsurance, Durationoftrip, Riskexposure, Packet, Taxnumber, City, Street, HouseNumber, GenderCT, FirstName, LastName, DateOfbirth, Email, PhoneNumber } from './store.js'
</script>

<style>
    #fakeFormTravelComplete { 
        display: none
    }
</style>

<form id="fakeFormTravelComplete" style="display:none">
    <label for="Email">Email:</label>
    <input type="text" id="Email" name="Email" value={$Email}>
    <input type="submit" id="submitForm" value="Submit">
</form>