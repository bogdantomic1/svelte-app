<script>
    import { currentStep, Numberofpeople, Startingdayofinsurance, Durationofinsurance, Durationoftrip, Riskexposure, Packet } from '../store.js'

    let setStep = (val) => {
        currentStep.update((n) => val);
    }

</script>

<section class="text-gray-600 body-font">
  <div class="container px-5 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Travel Step 1</h1>
      <p class="leading-relaxed mt-4">Please fill in all the information and continue to the next step</p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <div class="relative mb-4">
        <label for="Numberofpeople" class="leading-7 text-sm text-gray-600">Number of People</label>
        <select bind:value={$Numberofpeople} id="Numberofpeople" name="Numberofpeople" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <option value="206450000">Individually</option>
          <option value="206450001">Family</option>
          <option value="206450002">Group</option>
        </select>
      </div>
      <div class="relative mb-4">
        <label for="Startingdayofinsurance" class="leading-7 text-sm text-gray-600">Starting day of Insurance</label>
        <input type="date" bind:value={$Startingdayofinsurance} id="Startingdayofinsurance" name="Startingdayofinsurance" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="Durationofinsurance" class="leading-7 text-sm text-gray-600">Duration of Insurance</label>
        <select bind:value={$Durationofinsurance} id="Durationofinsurance" name="Durationofinsurance" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
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
      </div>
      <div class="relative mb-4">
        <label for="Durationoftrip" class="leading-7 text-sm text-gray-600">Duration of trip</label>
        <select bind:value={$Durationoftrip} id="Durationoftrip" name="Durationoftrip" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <option value="206450000">Less than 90 days</option>
          <option value="206450001">90 or more days</option>
        </select>
      </div>
      <div class="relative mb-4">
        <label for="Riskexposure" class="leading-7 text-sm text-gray-600">Risk exposure</label>
        <select bind:value={$Riskexposure} id="Riskexposure" name="Riskexposure" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <option value="206450000">Yes</option>
          <option value="206450001">No</option>
        </select>
      </div>
      <div class="relative mb-4">
        <label for="Packet" class="leading-7 text-sm text-gray-600">Package</label>
        <select bind:value={$Packet} id="Packet" name="Packet" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <option value="206450000">A</option>
          <option value="206450001">B</option>
          <option value="206450002">C</option>
        </select>
      </div>
      <button on:click={() => setStep(2) } class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Next Step</button>
    </div>
  </div>
</section>