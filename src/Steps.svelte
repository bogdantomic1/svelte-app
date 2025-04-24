<script>
  import Step1 from "./Steps/Step1.svelte";
  import Step2 from "./Steps/Step2.svelte";
  import Step3 from "./Steps/Step3.svelte";
  import Step4 from "./Steps/Step4.svelte";
  import AccidentStep1 from "./AccidentSteps/Step1.svelte";
  import AccidentStep2 from "./AccidentSteps/Step2.svelte";
  import AccidentStep3 from "./AccidentSteps/Step3.svelte";
  import AccidentStep4 from "./AccidentSteps/Step4.svelte";
  import FakeForm from "./FakeForm.svelte";
  import FakeFormAccident from "./FakeFormAccident.svelte";
  import FakeFormTravel from "./FakeFormTravel.svelte";
  import FakeFormTravelComplete from "./FakeFormTravelComplete.svelte";
  import  jquery from "jquery";

  // import jQuery from 'jquery'

  import {
    formType,
    AccidentEmail,
    AccidentPacket,
    AccidentNumberofpeople,
    AccidentDurationofinsurance,
    AccidentFirstName,
    AccidentLastName,
    AccidentDateOfbirth,
    Durationofinsurance,
    Durationoftrip,
    Numberofpeople,
    Packet,
    currentStep,
    FirstName,
    LastName,
    DateOfbirth,
    Startingdayofinsurance,
    Email,
  } from "./store.js";


  
  document.addEventListener("DOMContentLoaded", () => {

console.log("USAOOOOAOOAOAOAOOAO steps");

function submitForm(form, mappings) {
 const serializedForm = d365mktformcapture.serializeForm(form, mappings);
 const payload = serializedForm.SerializedForm.build();

 const formedUrl = "https://public-eur.mkt.dynamics.com/api/v1.0/orgs/031746fd-6eb4-43a8-9fa4-4488bcfad3ba/landingpageforms/forms/8fb7be5e-5120-f011-9989-000d3aa92e0a"

 if (document.getElementById("Email")?.value.trim() !== "") { //document.getElementById("Email").value.trim() !== ""
 console.log("fetching");   
//  fetch(formedUrl, {
//         method: "post",
//         headers: {
//                     "Content-Type": "application/json;charset=UTF-8",
//                 },
//         body: payload.data,
//         keepalive: true,
//     })
//         .then(() => {
//             console.log("submission complete");
//         })
//         .catch((e) => {
//             console.log(e);
//         });
          const data = new FormData(document.getElementById('fakeFormPet'))
          const blob = new Blob([JSON.stringify(payload.data)], {
            type: 'application/json;charset=UTF-8',
          });
          navigator.sendBeacon(formedUrl, blob);
        
  } 
  else {console.log("nema");return;}
}



d365mktformcapture.waitForElement("#fakeFormTravel").then((form) => {
const mappings = [
    // {
    //     FormFieldName: "Packet",
    //     DataverseFieldName: "cr697_package",
    //     DataverseFieldValue: [
    //         { FormValue: "206450000", DataverseValue: "0" },
    //         { FormValue: "206450001", DataverseValue: "1" },
    //         { FormValue: "206450002", DataverseValue: "2" },
    //     ],
    // },
    // {
    //     FormFieldName: "Taxnumber",
    //     DataverseFieldName: "cr697_taxnumber",
    // },
    {
        FormFieldName: "Email",
        DataverseFieldName: "emailaddress1",
    },
    {
        FormFieldName: "FirstName",
        DataverseFieldName: "firstname",
    },
    {
        FormFieldName: "LastName",
        DataverseFieldName: "lastname",
    }
    // {
    //     FormFieldName: "LastName",
    //     DataverseFieldName: "cr697_lastnameleadct",
    // },
];

// Define the pagehide event listener

const handlePageHide = (e) => {
    // if (!e.persisted) {
    //     submitForm(form, mappings);
    // }
    console.log("pagehide event triggered");``
    submitForm(form, mappings);
};
// Attach pagehide event listener
 window.addEventListener("unload", handlePageHide); ///ovdeeeee

//  $("ul.stepsIndicator a, button.btn-next, a.btn-prev").on("click", function () {
//             window.removeEventListener("unload", handlePageHide);
//         });
//         // Custom jQuery selector for case-insensitive text match
//     jQuery.expr[":"].icontains = jQuery.expr.createPseudo(function (arg) {
//         return function (elem) {
//             return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
//         };
//     });

//         // Remove pagehide event when clicking specific links containing "prijava"
//         $('a:icontains(prijava)').each((i, e) => {
//             $(e).on("click", function () {
//                 window.removeEventListener("unload", handlePageHide);
//             });
//         });

document.querySelectorAll("a").forEach((element) => {
element.addEventListener("click", () => {
console.log("skinuo event");
window.removeEventListener("unload", handlePageHide);
});
});



});


});



function formSubmition(event) {
  event.preventDefault();
  console.log("form submited1");
  let form = document.getElementById("fakeFormTravel");
  if (form) {
         let event = new Event("submit", { bubbles: true, cancelable: true });
         form.dispatchEvent(event);
         console.log("Submit event dispatched!");
     } else {
         console.error("Form not found!");
     }

 

  console.log("form ended");
}

  let count_value;

  currentStep.subscribe((value) => {
    count_value = value;
  });

  let beforeLoadSet = false;

  let setStep = (val) => {
    console.log(val);
    currentStep.update((n) => val);

    if ($currentStep == 4 && !beforeLoadSet) {
      console.log("before unload set");
      beforeLoadSet = true;
      //window.addEventListener('unload', event => submitForm(event));
      //window.addEventListener("beforeunload", (event) => {
        //event.preventDefault();
        //submitForm();
      //});
    }
  };

 

  let active = "bg-gray-100 border-red-500 text-red-500 rounded-t";
  let notactive = "border-gray-200 hover:text-gray-900";
</script>

<section class="text-gray-600 body-font">
  <div class="container px-5 mx-auto flex flex-wrap flex-col">
    <div class="flex mx-auto flex-wrap mb-5">
      <div class="flex mr-6 items-center">
        <span class="mr-3">Form: </span>
        <div class="relative">
          <select
            bind:value={$formType}
            class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
          >
            <option>Travel</option>
            <option>Accident</option>
          </select>
          <span
            class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </div>
      </div>
      <a
        on:click={() => setStep(1)}
        class="{$currentStep == 1
          ? active
          : notactive} sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>STEP 1
      </a>
      <a
        on:click={() =>  setStep(2)}
        class="{$currentStep == 2
          ? active
          : notactive} sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>STEP 2
      </a>
      <a
        on:click={() => {setStep(3); }}
        class="{$currentStep == 3
          ? active
          : notactive} sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="5" r="3"></circle>
          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
        </svg>STEP 3
      </a>
      <a
        on:click={() => setStep(4)}
        class="{$currentStep == 4
          ? active
          : notactive} sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>STEP 4
      </a>
    </div>

    {#if count_value == 1}
      {#if $formType == "Travel"}
        <Step1 />
      {:else}
        <AccidentStep1 />
      {/if}
    {:else if count_value == 2}
      {#if $formType == "Travel"}
        <Step2 />
      {:else}
        <AccidentStep2 />
      {/if}
    {:else if count_value == 3}
      {#if $formType == "Travel"}
        <Step3 />
      {:else}
        <AccidentStep3 />
      {/if}
    {:else if count_value == 4}
      {#if $formType == "Travel"}
        <Step4 on:userSubmit={formSubmition} />
      {:else}
        <AccidentStep4 on:userSubmit={removeListener} />
      {/if}
    {/if}

    <FakeForm />
    <FakeFormAccident />
    <FakeFormTravel />
    <FakeFormTravelComplete />
  </div>
</section>
