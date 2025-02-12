<script>
    import {  currentStep, AccidentFirstName, AccidentLastName, AccidentDateOfbirth, AccidentEmail, AccidentGenderCT } from '../store.js'

    let setStep = (val) => {
        currentStep.update((n) => val);
    }

</script>

<section class="text-gray-600 body-font">
  <div class="container px-5 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Accident Step 3</h1>
      <p class="leading-relaxed mt-4">Please fill in all the information and continue to the next step</p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <div class="relative mb-4">
        <label for="AccidentFirstName" class="leading-7 text-sm text-gray-600">First Name</label>
        <input type="text" bind:value={$AccidentFirstName} id="AccidentFirstName" name="AccidentFirstName" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="AccidentLastName" class="leading-7 text-sm text-gray-600">Last Name</label>
        <input type="text" bind:value={$AccidentLastName} id="AccidentLastName" name="AccidentLastName" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="AccidentDateOfbirth" class="leading-7 text-sm text-gray-600">Date Of birth</label>
        <input type="date" bind:value={$AccidentDateOfbirth} id="AccidentDateOfbirth" name="AccidentDateOfbirth" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="AccidentEmail" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" bind:value={$AccidentEmail} id="AccidentEmail" name="AccidentEmail" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="AccidentGenderCT" class="leading-7 text-sm text-gray-600">Gender CT</label>
        <select bind:value={$AccidentGenderCT} id="AccidentGenderCT" name="AccidentGenderCT" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Undefined</option>
        </select>
      </div>
      <button on:click={() => setStep(4) } class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Next Step</button>
    </div>
  </div>
</section>