<script>
    import { currentStep, AccidentStartingdayofinsurance, AccidentDurationofinsurance, AccidentNumberofpeople, AccidentPacket, AccidentPersonalInsurance, AccidentRegisteredAthlete } from '../store.js'

    
    let setStep = (val) => {
        currentStep.update((n) => val);
    }

</script>

<section class="text-gray-600 body-font">
  <div class="container px-5 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Accident Step 1</h1>
      <p class="leading-relaxed mt-4">Please fill in all the information and continue to the next step</p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <div class="relative mb-4">
        <label for="Startingdayofinsurance" class="leading-7 text-sm text-gray-600">Starting day of Insurance</label>
        <input type="date" bind:value={$AccidentStartingdayofinsurance} id="Startingdayofinsurance" name="Startingdayofinsurance" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="AccidentDurationofinsurance" class="leading-7 text-sm text-gray-600">Duration of Insurance</label>
        <select bind:value={$AccidentDurationofinsurance} id="AccidentDurationofinsurance" name="AccidentDurationofinsurance" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <option value="206450000">1 year with automatic renewal</option>
          <option value="206450001">1 year without automatic renewal</option>
        </select>
      </div>
      <div class="relative mb-4">
        <label for="AccidentNumberofpeople" class="leading-7 text-sm text-gray-600">Number of People</label>
        <input type="number" bind:value={$AccidentNumberofpeople} id="AccidentNumberofpeople" name="AccidentNumberofpeople" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="AccidentPacket" class="leading-7 text-sm text-gray-600">Package</label>
        <select bind:value={$AccidentPacket} id="AccidentPacket" name="AccidentPacket" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <option value="206450000">Small package</option>
          <option value="206450001">Big package</option>
          <option value="206450002">Comfort package</option>
        </select>
      </div>

      <div class="relative mb-4">
        <label for="AccidentPersonalInsurance" class="leading-7 text-sm text-gray-600">Personal Insurance</label>
        <select bind:value={$AccidentPersonalInsurance} id="AccidentPersonalInsurance" name="AccidentPersonalInsurance" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <option value="206450002">Yes</option>
          <option value="206450003">No</option>
        </select>
      </div>
      <div class="relative mb-4">
        <label for="AccidentRegisteredAthlete" class="leading-7 text-sm text-gray-600">Registered Athlete</label>
        <select bind:value={$AccidentRegisteredAthlete} id="AccidentRegisteredAthlete" name="AccidentRegisteredAthlete" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <option value="206450000">Yes</option>
          <option value="206450001">No</option>
        </select>
      </div>

      <button on:click={() => setStep(2) } class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Next Step</button>
    </div>
  </div>
</section>