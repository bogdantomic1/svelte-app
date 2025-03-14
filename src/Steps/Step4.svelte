<script>
  import {
    Numberofpeople,
    Startingdayofinsurance,
    Durationofinsurance,
    Durationoftrip,
    Riskexposure,
    Packet,
    Taxnumber,
    City,
    Street,
    HouseNumber,
    GenderCT,
    FirstName,
    LastName,
    DateOfbirth,
    Email,
    PhoneNumber,
  } from "../store.js";
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  function track_msdynmkt_exittrigger_135927779() {
    window["msdynmkt"].setUser({ authId: emailField.value }); // ID, e-mail or phone number - see instructions
    window["msdynmkt"].trackEvent({
      name: "msdynmkt_exittrigger_135927779", //Trigger title: Exit trigger
      ingestionKey:
        "b1d765b9c293466bb1ef2ac825fc18f8-3d35c0db-60a3-4e5b-a38a-626cf4a27efb-7558",
      version: "1.0.0",
      properties: {
        bindingid: emailField.value,
      },
    });

    console.log("proslo");
  }

  onMount(() => {
    console.log("Component is fully loaded!");

    // Example: Get form values
    const emailField = document.getElementById("Email");
    if (emailField.value) {
      console.log("Email:", emailField.value);
      track_msdynmkt_exittrigger_135927779();
    }
  });

  function sayHi() {
    console.log("hi");
  }
</script>

<div
  class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
>
  <div
    class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
  >
    <div class="lg:w-1/3 md:w-1/2 w-full px-4">
      <h2
        class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
      >
        Travel Step 1
      </h2>
      <nav class="list-none mb-10">
        <li>
          <p>Number of people: {$Numberofpeople}</p>
        </li>
        <li>
          <p>Starting day of insurance : {$Startingdayofinsurance}</p>
        </li>
        <li>
          <p>Duration of insurance : {$Durationofinsurance}</p>
        </li>
        <li>
          <p>Duration of trip : {$Durationoftrip}</p>
        </li>
        <li>
          <p>Riskexposure : {$Riskexposure}</p>
        </li>
        <li>
          <p>Packet : {$Packet}</p>
        </li>
      </nav>
    </div>
    <div class="lg:w-1/3 md:w-1/2 w-full px-4">
      <h2
        class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
      >
        Travel Step 2
      </h2>
      <nav class="list-none mb-10">
        <li>
          <p>Taxnumber: {$Taxnumber}</p>
        </li>
        <li>
          <p>City : {$City}</p>
        </li>
        <li>
          <p>Street : {$Street}</p>
        </li>
        <li>
          <p>House Number : {$HouseNumber}</p>
        </li>
        <li>
          <p>Gender CT : {$GenderCT}</p>
        </li>
      </nav>
    </div>
    <div class="lg:w-1/3 md:w-1/2 w-full px-4">
      <h2
        class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
      >
        Travel Step 3
      </h2>
      <nav class="list-none mb-10">
        <li>
          <p>First Name : {$FirstName}</p>
        </li>
        <li>
          <p>Last Name : {$LastName}</p>
        </li>
        <li>
          <p>Date Of birth : {$DateOfbirth}</p>
        </li>
        <li>
          <p>Email : {$Email}</p>
        </li>
        <li>
          <p>Phone Number : {$PhoneNumber}</p>
        </li>
      </nav>
    </div>
  </div>
  <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <button
      on:click={() => sayHi()}
      class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
      >Submit</button
    >
  </div>
</div>
