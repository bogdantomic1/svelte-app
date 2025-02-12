<script>
  import Step1 from './Steps/Step1.svelte';
  import Step2 from './Steps/Step2.svelte';
  import Step3 from './Steps/Step3.svelte';
  import Step4 from './Steps/Step4.svelte';
  import AccidentStep1 from './AccidentSteps/Step1.svelte';
  import AccidentStep2 from './AccidentSteps/Step2.svelte';
  import AccidentStep3 from './AccidentSteps/Step3.svelte';
  import AccidentStep4 from './AccidentSteps/Step4.svelte';
  import FakeForm from './FakeForm.svelte';
  import FakeFormAccident from './FakeFormAccident.svelte';
  import FakeFormTravel from './FakeFormTravel.svelte';
  import { formType, AccidentEmail, AccidentPacket, AccidentNumberofpeople, AccidentDurationofinsurance, AccidentFirstName, AccidentLastName, AccidentDateOfbirth, Durationofinsurance, Durationoftrip, Numberofpeople, Packet, currentStep, FirstName, LastName, DateOfbirth, Startingdayofinsurance, Email } from './store.js';

  function submitForm(event) {
    event.preventDefault();
    if($Email || $AccidentEmail) {
      console.log($formType)
      if($formType == "Travel") {
      MsCrmMkt.MsCrmFormLoader.sendFormCaptureToCrm(document.getElementById('fakeFormTravel')).then((e) => {
            console.log(e);    
            console.log('Travel - Submission Complete');
            // track_msdynmkt_triggertraveltest_104426834();
           // track_msdynmkt_abandoncarttrigger_142637121(); 
        });

        MsCrmMkt.MsCrmFormLoader.on("afterFormSubmit", function(event) {
          console.log(event);
        });

      } else {
        console.log('submitting accident....')
        MsCrmMkt.MsCrmFormLoader.sendFormCaptureToCrm(document.getElementById('fakeFormAccident')).then((e) => {
            console.log(e)
            console.log('Accident - Submission Complete');
            track_msdynmkt_acforaccidentinsurancetest_101137115();
           // track_msdynmkt_abandoncarttrigger_142637121(); 
        });

        MsCrmMkt.MsCrmFormLoader.on("afterFormSubmit", function(event) {
          console.log(event);
        });
      }
    }
      event.returnValue = '';
  }

  function removeListener() {
    window.removeEventListener('beforeunload', submitForm);
    if($Email) {
      if($formType == "Travel") {
        console.log('submit travel exit trigger')
        track_msdynmkt_exittrigger_travelinsurancetest_154712597();
        // track_msdynmkt_exittrigger_travelinsurance_112445638();
        // MsCrmMkt.MsCrmFormLoader.sendFormCaptureToCrm(document.getElementById('fakeFormTravel')).then((e) => {
        //     console.log('Travel - Submission Complete');
        //    // track_msdynmkt_triggertraveltest_104426834();
        //     track_msdynmkt_exittrigger_travelinsurance_112445638();
        //    // track_msdynmkt_abandoncarttrigger_142637121(); 
        // });

        MsCrmMkt.MsCrmFormLoader.on("afterFormSubmit", function(event) {
          console.log(event);
        });

      } else {
        console.log('submit accident exit trigger')
        // MsCrmMkt.MsCrmFormLoader.sendFormCaptureToCrm(document.getElementById('fakeFormAccident')).then(() => {
        //     console.log('Accident - Submission Complete');
        //     track_msdynmkt_acforaccidentinsurancetest_101137115();
        //    // track_msdynmkt_abandoncarttrigger_142637121(); 
        // });
        track_msdynmkt_exittrigger_accidentinsurance_113536627();
      }
    }
  }
     
  function track_msdynmkt_triggertraveltest_104426834() {

    let duration = "";
    switch($Durationofinsurance) {
      case 206450002:
        duration = "2 days"
        break;
      case 206450003:
        duration = "3 days"
        break;
      case 206450004:
        duration = "5 days"
        break;
      case 206450005:
        duration = "8 days"
        break;
      case 206450006:
        duration = "15 days"
        break;
      case 206450007:
        duration = "21 days"
        break;
      case 206450008:
        duration = "30 days"
        break;
      case 206450009:
        duration = "60 days"
        break;
      case 206450010:
        duration = "1 year"
        break;
    }

    window["msdynmkt"].setUser({ authId: $Email});   // ID, e-mail or phone number - see instructions
    window["msdynmkt"].trackEvent({
        name: "msdynmkt_triggertraveltest_104426834", //Trigger title: Abandon Cart for Travel Insurance Test
        ingestionKey : "c5eb70d46f704ec2a29bd75d30423e1a-2b4924c6-64f1-4752-b2b7-caf7ee263843-7455",
        version: "1.0.0" ,
        properties: {
          "dateofbirth" : $DateOfbirth.toLocaleDateString('en-GB'),
          "durationofinsurance" : duration,  
          "durationoftravel" : ($Durationoftrip == 206450000) ? "Less than 90 days" : "90 or more days",
          "firstname" : $FirstName,
          "lastname" : $LastName,
          "numberofpeople" : ($Numberofpeople == 206450000) ? "Individually" : ($Numberofpeople == 206450001) ? "Family" : "Group",
          "travelpackage" : ($Packet == 206450000) ? "A" : ($Packet == 206450001) ? "B" : "C",
          "bindingid" : "test123"
        }
    });
  }

  function track_msdynmkt_acforaccidentinsurancetest_101137115() {
      window["msdynmkt"].setUser({ authId: $AccidentEmail});   // ID, e-mail or phone number - see instructions
      window["msdynmkt"].trackEvent({
          name: "msdynmkt_acforaccidentinsurancetest_101137115", //Trigger title: AC for Accident Insurance Test
          ingestionKey : "c5eb70d46f704ec2a29bd75d30423e1a-2b4924c6-64f1-4752-b2b7-caf7ee263843-7455",
          version: "1.0.0" ,
          properties: {
            "dateofbirth" : $AccidentDateOfbirth.toLocaleDateString('en-GB'),
            "firstname" : $AccidentFirstName,
            "insuranceduration" : ($AccidentDurationofinsurance == 206450000) ? "1 year with automatic renewal" : "1 year without automatic renewal",
            "lastname" : $AccidentLastName,
            "noofpeopleforinsurance" : String($AccidentNumberofpeople),
            "packageforaccident" : ($AccidentPacket == 206450000) ? "Small package" : ($AccidentPacket == 206450001) ? "Big package" : "Comfort package",
            "bindingid" : "Test456"
          }
      });
  }

  
  function track_msdynmkt_exittrigger_travelinsurancetest_154712597() {
      window["msdynmkt"].setUser({ authId: $Email});   // ID, e-mail or phone number - see instructions
      window["msdynmkt"].trackEvent({
          name: "msdynmkt_exittrigger_travelinsurancetest_154712597", //Trigger title: Exit Trigger - Travel Insurance Test
          ingestionKey : "c5eb70d46f704ec2a29bd75d30423e1a-2b4924c6-64f1-4752-b2b7-caf7ee263843-7455",
          version: "1.0.0" ,
          properties: {
          "canexit" : true,
          "bindingid" : "Test789"
        }
      });
  }

  function track_msdynmkt_exittrigger_travelinsurance_112445638() {
      window["msdynmkt"].setUser({ authId: $Email});   // ID, e-mail or phone number - see instructions
      window["msdynmkt"].trackEvent({
          name: "msdynmkt_exittrigger_travelinsurance_112445638", //Trigger title: Exit Trigger - Travel Insurance
          ingestionKey : "c5eb70d46f704ec2a29bd75d30423e1a-2b4924c6-64f1-4752-b2b7-caf7ee263843-7455",
          version: "1.0.0",
        // To learn more about the event properties below, please see the documentation on Special attributes for custom triggers.
      properties: {
        "bindingid" : "Test789"
      }
    });
  }

  
  function track_msdynmkt_exittrigger_accidentinsurance_113536627() {
      window["msdynmkt"].setUser({ authId: $AccidentEmail});   // ID, e-mail or phone number - see instructions
      window["msdynmkt"].trackEvent({
          name: "msdynmkt_exittrigger_accidentinsurance_113536627", //Trigger title: Exit trigger - Accident insurance
          ingestionKey : "c5eb70d46f704ec2a29bd75d30423e1a-2b4924c6-64f1-4752-b2b7-caf7ee263843-7455",
          version: "1.0.0" ,
          properties: {
            "bindingid" : "Test101112"
          }
      });
  }

  function track_msdynmkt_abandoncarttrigger_142637121() {
      window["msdynmkt"].setUser({ authId: $Email});   // ID, e-mail or phone number - see instructions
      window["msdynmkt"].trackEvent({
          name: "msdynmkt_abandoncarttrigger_142637121", //Trigger title: Abandon Cart Trigger
          ingestionKey : "c5eb70d46f704ec2a29bd75d30423e1a-2b4924c6-64f1-4752-b2b7-caf7ee263843-7455",
          version: "1.0.0" ,
      properties: {
      "totalamount" : "1234",
       "state" : "active",
       "laststep" : currentStep,
       "firstname" : $FirstName,
       "lastname" : $LastName,
       "productname" : "testProduct",
       "productid" : 1001,
       "bindingid" : "test123",
       "date" : "test"
      }
      });

      console.log('trigger triggered! ' + $Email )
  }

  let count_value;

  currentStep.subscribe((value) => {
    count_value = value;
  });

  // if ($currentStep == 4) {
  //       console.log('before unload set')
  //       window.addEventListener('beforeunload', event => submitForm(event));
  // }

  let beforeLoadSet = false;

  let setStep = (val) => {
    console.log(val)
      currentStep.update((n) => val);
      
      if ($currentStep == 4 && !beforeLoadSet) {
        console.log('before unload set')
        beforeLoadSet = true;
        window.addEventListener('beforeunload', event => submitForm(event));
      }
  }

  let active = "bg-gray-100 border-red-500 text-red-500 rounded-t"
  let notactive = "border-gray-200 hover:text-gray-900"
</script>


<section class="text-gray-600 body-font">
<div class="container px-5 mx-auto flex flex-wrap flex-col">
  <div class="flex mx-auto flex-wrap mb-5">
    <div class="flex mr-6 items-center">
      <span class="mr-3">Form: </span>
      <div class="relative">
        <select bind:value={$formType} class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
          <option>Travel</option>
          <option>Accident</option>
        </select>
        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </div>
    </div>
    <a on:click={() => setStep(1)} class="{$currentStep == 1 ? active : notactive} sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>STEP 1
    </a>
    <a on:click={() => setStep(2)} class="{$currentStep == 2 ? active : notactive} sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>STEP 2
    </a>
    <a on:click={() => setStep(3)} class="{$currentStep == 3 ? active : notactive} sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
        <circle cx="12" cy="5" r="3"></circle>
        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
      </svg>STEP 3
    </a>
    <a on:click={() => setStep(4)} class="{$currentStep == 4 ? active : notactive} sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
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
        <Step4 on:userSubmit={removeListener}/>
      {:else}
        <AccidentStep4 on:userSubmit={removeListener}/>
      {/if}
  {/if}

  <FakeForm />
  <FakeFormAccident />
  <FakeFormTravel />
</div>
</section>