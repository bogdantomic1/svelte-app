<script>
    import { AccidentStartingdayofinsurance, AccidentDurationofinsurance, AccidentNumberofpeople, AccidentPacket, AccidentPersonalInsurance, AccidentRegisteredAthlete, AccidentTaxnumber, AccidentCity, AccidentStreet, AccidentHouseNumber, AccidentFirstName, AccidentLastName, AccidentDateOfbirth, AccidentEmail, AccidentGenderCT } from '../store.js'
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    function removeListener() {
      dispatch('userSubmit')
    }
    
</script>

  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Accident Step 1</h2>
        <nav class="list-none mb-10">
          <li>
            <p>Starting day of insurance : {$AccidentStartingdayofinsurance}</p>
          </li>
          <li>
            <p>Duration of insurance : {$AccidentDurationofinsurance}</p>
          </li>
          <li>
            <p>Number of people : {$AccidentNumberofpeople}</p>
          </li>
          <li>
            <p>Packet : {$AccidentPacket}</p>
          </li>
          <li>
            <p>Personal Insurance : {$AccidentPersonalInsurance}</p>
          </li>
          <li>
            <p>Registered athlete : {$AccidentRegisteredAthlete}</p>
          </li>
          
        </nav>
      </div>
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Accident Step 2</h2>
        <nav class="list-none mb-10">
          <li>
            <p>Taxnumber: {$AccidentTaxnumber}</p>
          </li>
          <li>
            <p>City : {$AccidentCity}</p>
          </li>
          <li>
            <p>Street : {$AccidentStreet}</p>
          </li>
          <li>
            <p>House Number : {$AccidentHouseNumber}</p>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Accident Step 3</h2>
        <nav class="list-none mb-10">
          <li>
            <p>First Name : {$AccidentFirstName}</p>
          </li>
          <li>
            <p>Last Name : {$AccidentLastName}</p>
          </li>
          <li>
            <p>Date Of birth : {$AccidentDateOfbirth}</p>
          </li>
          <li>
            <p>Email : {$AccidentEmail}</p>
          </li>
          <li>
            <p>Gender CT : {$AccidentGenderCT}</p>
          </li>
        </nav>
      </div>
    </div>
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <button on:click={removeListener} class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Submit</button>
    </div>
  </div>