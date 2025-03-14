<script>
  import {
    currentStep,
    FirstName,
    LastName,
    DateOfbirth,
    Email,
    PhoneNumber,
  } from "../store.js";

  let setStep = (val) => {
    currentStep.update((n) => val);
  };

  function goToThankYou() {
    window.location.href = "/thankyou";
  }
</script>

<section class="text-gray-600 body-font">
  <div class="container px-5 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">
        Travel Step 3
      </h1>
      <p class="leading-relaxed mt-4">
        Please fill in all the information and continue to the next step
      </p>
    </div>
    <div
      class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
    >
      <div class="relative mb-4">
        <label for="FirstName" class="leading-7 text-sm text-gray-600"
          >First Name</label
        >
        <input
          type="text"
          bind:value={$FirstName}
          id="FirstName"
          name="FirstName"
          class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div class="relative mb-4">
        <label for="LastName" class="leading-7 text-sm text-gray-600"
          >Last Name</label
        >
        <input
          type="text"
          bind:value={$LastName}
          id="LastName"
          name="LastName"
          class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div class="relative mb-4">
        <label for="DateOfbirth" class="leading-7 text-sm text-gray-600"
          >Date Of birth</label
        >
        <input
          type="date"
          bind:value={$DateOfbirth}
          id="DateOfbirth"
          name="DateOfbirth"
          class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div class="relative mb-4">
        <label for="Email" class="leading-7 text-sm text-gray-600">Email</label>
        <input
          type="email"
          bind:value={$Email}
          id="Email"
          name="Email"
          class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div class="relative mb-4">
        <label for="PhoneNumber" class="leading-7 text-sm text-gray-600"
          >Phone Number</label
        >
        <input
          type="text"
          bind:value={$PhoneNumber}
          id="PhoneNumber"
          name="PhoneNumber"
          class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button
        on:click={() => setStep(4)}
        class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
        >Next Step</button
      >
    </div>
  </div>
</section>
