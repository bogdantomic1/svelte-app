<script>
    import { currentStep, AccidentTaxnumber, AccidentCity, AccidentStreet, AccidentHouseNumber } from '../store.js'

    let setStep = (val) => {
        currentStep.update((n) => val);
    }

</script>

<section class="text-gray-600 body-font">
  <div class="container px-5 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Accident Step 2</h1>
      <p class="leading-relaxed mt-4">Please fill in all the information and continue to the next step</p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <div class="relative mb-4">
        <label for="AccidentTaxnumber" class="leading-7 text-sm text-gray-600">Taxnumber</label>
        <input type="text" bind:value={$AccidentTaxnumber} id="AccidentTaxnumber" name="AccidentTaxnumber" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="AccidentCity" class="leading-7 text-sm text-gray-600">City</label>
        <input type="text" bind:value={$AccidentCity} id="AccidentCity" name="AccidentCity" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="AccidentStreet" class="leading-7 text-sm text-gray-600">Street</label>
        <input type="text" bind:value={$AccidentStreet} id="AccidentStreet" name="AccidentStreet" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="AccidentHouseNumber" class="leading-7 text-sm text-gray-600">HouseNumber</label>
        <input type="text" bind:value={$AccidentHouseNumber} id="AccidentHouseNumber" name="AccidentHouseNumber" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <button on:click={() => setStep(3) } class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Next Step</button>
    </div>
  </div>
</section>