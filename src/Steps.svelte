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
  import FakeFormTravelComplete from './FakeFormTravelComplete.svelte';
  
  // import jQuery from 'jquery'


  import { formType, AccidentEmail, AccidentPacket, AccidentNumberofpeople, AccidentDurationofinsurance, AccidentFirstName, AccidentLastName, AccidentDateOfbirth, Durationofinsurance, Durationoftrip, Numberofpeople, Packet, currentStep, FirstName, LastName, DateOfbirth, Startingdayofinsurance, Email } from './store.js';

  document.addEventListener("DOMContentLoaded", () => {
    console.log('ovde sam');
    // MsCrmMkt.MsCrmFormLoader.on("formLoad", function(event) {
    //   console.log(event);
    //   console.log('form loaded');
    // })

    // MsCrmMkt.MsCrmFormLoader.on("formRender", function(event) {
    //   console.log(event);
    //   console.log('form redndered');
    // })

    function track_msdynmkt_testtrigger1_105503091() {
      const email = document.getElementById('Email').value;
      console.log("ovo je email", email);
        window["msdynmkt"].setUser({ authId: email});   // ID, e-mail or phone number - see instructions
        window["msdynmkt"].trackEvent({
            name: "msdynmkt_testtrigger1_105503091", //Trigger title: testTrigger1
            ingestionKey : "b1d765b9c293466bb1ef2ac825fc18f8-3d35c0db-60a3-4e5b-a38a-626cf4a27efb-7558",
            version: "1.0.0",
	    // To learn more about the event properties below, please see the documentation on Special attributes for custom triggers.
	    properties: {
		 "bindingid" : "",
		 "jobtitle" : "Tomicc",
		 "lastname" : "Tomicc"
	    }
      
	});
  console.log(window["msdynmkt"]);
  console.log("trek skripta"); 

    }

    d365mktformcapture
        .waitForElement('#fakeFormTravel') // example: "#form1" as a selector for form with id="form1"
        .then((form) => {
          console.log('mapiranje');
          console.log(form);
          //newSubmit();

         
            const mappings = [
            {
              FormFieldName: 'City',
              DataverseFieldName: 'lastname',
            },
            {
              FormFieldName: 'Taxnumber',
              DataverseFieldName: 'jobtitle',
            },
            {
              FormFieldName: 'Email',
              DataverseFieldName: 'emailaddress1',
            },
          ];

          console.log(mappings);

          window.addEventListener(
            'unload',
            (e) => {
              e.preventDefault();
              
              //newSubmit();
              const serializedForm = d365mktformcapture.serializeForm(
                form,
                mappings,
              );
              console.log(JSON.stringify(serializedForm)); // NOTE: enable for debugging //https://cors-anywhere.herokuapp.com
              const payload = serializedForm.SerializedForm.build();
              console.log(payload);  

              const captureConfig = {
                FormId: 'dee03d17-94e7-ef11-9342-000d3aba33c2',
                FormApiUrl:
                  'https://cors-anywhere.herokuapp.com/https://public-eur.mkt.dynamics.com/api/v1.0/orgs/9bc5e4fe-4bda-ef11-b8e4-000d3ab73d5f/landingpageforms',
              };
              const formedUrl =
                  'https://public-eur.mkt.dynamics.com/api/v1.0/orgs/9bc5e4fe-4bda-ef11-b8e4-000d3ab73d5f/landingpageforms/forms/dee03d17-94e7-ef11-9342-000d3aba33c2';

              // d365mktformcapture
              //   .submitForm(captureConfig, payload)
              //   .catch((e) => {
              //     console.log(e);
              //     console.log('Form submission failed');
              //   });

              if (document.getElementById('Email').value.trim() !== '') {
                // fetch(formedUrl, {
                //   method: 'post',
                //   headers:{
                //     'Content-Type': 'application/json;charset=UTF-8'
                //   },
                //   body: payload.data,
                //   keepalive: true
                // })
                // .then(() => { console.log('submission complete') });
                track_msdynmkt_testtrigger1_105503091()
              } else {
                console.log("nema")
                return
              }

                
             

              console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA');
            },
            true,
          );



          form.addEventListener(
            'submit',
            (e) => {
              e.preventDefault();
              //newSubmit();
              
              const serializedForm = d365mktformcapture.serializeForm(
                form,
                mappings,
              );
              console.log(JSON.stringify(serializedForm)); // NOTE: enable for debugging //https://cors-anywhere.herokuapp.com
              const payload = serializedForm.SerializedForm.build();
              console.log(payload);  

              const captureConfig = {
                FormId: 'dee03d17-94e7-ef11-9342-000d3aba33c2',
                FormApiUrl:
                  'https://cors-anywhere.herokuapp.com/https://public-eur.mkt.dynamics.com/api/v1.0/orgs/9bc5e4fe-4bda-ef11-b8e4-000d3ab73d5f/landingpageforms',
              };
              const formedUrl =
                  'https://public-eur.mkt.dynamics.com/api/v1.0/orgs/9bc5e4fe-4bda-ef11-b8e4-000d3ab73d5f/landingpageforms/forms/dee03d17-94e7-ef11-9342-000d3aba33c2';

              // d365mktformcapture
              //   .submitForm(captureConfig, payload)
              //   .catch((e) => {
              //     console.log(e);
              //     console.log('Form submission failed');
              //   });

              if (document.getElementById('Email').value.trim() !== '') {
                fetch(formedUrl, {
                  method: 'post',
                  headers:{
                    'Content-Type': 'application/json;charset=UTF-8'
                  },
                  body: payload.data,
                  keepalive: true
                })
                .then(() => { console.log('submission complete') });
                track_msdynmkt_testtrigger1_105503091()
              } else {
                console.log("nema")
                return
              }

                
             

              console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA');
            },
            true,
          );
          
         
   });
   


    console.log("na dnu mscrmmkt func");
  });
  console.log("izasaoa");
 
  

  function submitForm(event) {
    // event.preventDefault();
    if($AccidentEmail) { //$Email ||
      console.log("U submit formu")
      console.log("ovde sam u subtim formu, prvom ifu")
      } else {
        console.log('submitting accident....')
        // MsCrmMkt.MsCrmFormLoader.sendFormCaptureToCrm(document.getElementById('fakeFormAccident')).then((e) => {
        //     console.log(e)
        //     console.log('Accident - Submission Complete');
        //     // track_msdynmkt_acforaccidentinsurancetest_101137115();
        //    // track_msdynmkt_abandoncarttrigger_142637121(); 
        // });

        // MsCrmMkt.MsCrmFormLoader.on("afterFormSubmit", function(event) {
        //   console.log(event);
        // });
      }
    }
  

  function removeListener() {
    //window.removeEventListener('beforeunload', event => submitForm(event));
    // if($Email) {
    //   if($formType == "Travel") {
    //     console.log('submitting travel exit form')
    //     //track_msdynmkt_exittrigger_travelinsurancetest_145414019()
    //     MsCrmMkt.MsCrmFormLoader.sendFormCaptureToCrm(document.getElementById('fakeFormTravelComplete')).then((e) => {
    //       console.log('Travel Exit form submitted')
    //     })
    //   } else {
    //     console.log('submit accident exit trigger')
    //   }
    // }
    // document.getElementById("fakeForm").submit()
    // console.log("subitovcao sam ali ovde");
  }

  // function track_msdynmkt_exittrigger_travelinsurancetest_145414019() {
  //       window["msdynmkt"].setUser({ authId: "<customer-id>"});   // ID, e-mail or phone number - see instructions
  //       window["msdynmkt"].trackEvent({
  //           name: "msdynmkt_exittrigger_travelinsurancetest_145414019", //Trigger title: Exit Trigger - Travel Insurance Test
  //           ingestionKey : "c233c22448aa4a799feedf6dd734d9c4-853de410-b103-4f95-91e2-b5d81be6e270-7136",
  //           version: "1.0.0" ,
	//     properties: {
	// 	 "bindingid" : "Test789"
	// 	}
  //       });
  //   }
     
  // function track_msdynmkt_abandonedcartfortravelinsurance_094020074() {
  //   let duration = "";
  //   switch($Durationofinsurance) {
  //     case 206450002:
  //       duration = "2 days"
  //       break;
  //     case 206450003:
  //       duration = "3 days"
  //       break;
  //     case 206450004:
  //       duration = "5 days"
  //       break;
  //     case 206450005:
  //       duration = "8 days"
  //       break;
  //     case 206450006:
  //       duration = "15 days"
  //       break;
  //     case 206450007:
  //       duration = "21 days"
  //       break;
  //     case 206450008:
  //       duration = "30 days"
  //       break;
  //     case 206450009:
  //       duration = "60 days"
  //       break;
  //     case 206450010:
  //       duration = "1 year"
  //       break;
  //   }

  //       window["msdynmkt"].setUser({ authId: $Email});   // ID, e-mail or phone number - see instructions
  //       window["msdynmkt"].trackEvent({
  //           name: "msdynmkt_abandonedcartfortravelinsurance_094020074", //Trigger title: Abandoned Cart for Travel Insurance
  //           ingestionKey : "c233c22448aa4a799feedf6dd734d9c4-853de410-b103-4f95-91e2-b5d81be6e270-7136",
  //           version: "1.0.0" ,
	//     properties: {
  //       "dateofbirth" : $DateOfbirth.toLocaleDateString('en-GB'),
  //         "durationofinsurance" : duration,  
  //         "durationoftravel" : ($Durationoftrip == 206450000) ? "Less than 90 days" : "90 or more days",
  //         "firstname" : $FirstName,
  //         "lastname" : $LastName,
  //         "numberofpeople" : ($Numberofpeople == 206450000) ? "Individually" : ($Numberofpeople == 206450001) ? "Family" : "Group",
  //         "travelpackage" : ($Packet == 206450000) ? "A" : ($Packet == 206450001) ? "B" : "C",
  //         "bindingid" : "bindingid"
	// 	  }
  //       });
  //   }

  let count_value;

  currentStep.subscribe((value) => {
    count_value = value;
  });

  let beforeLoadSet = false;

  let setStep = (val) => {
    console.log(val)
      currentStep.update((n) => val);
      
      if ($currentStep == 4 && !beforeLoadSet) {
        console.log('before unload set')
        beforeLoadSet = true;
        //window.addEventListener('unload', event => submitForm(event));
        window.addEventListener("beforeunload", (event) => {
          event.preventDefault(); 
        submitForm();
        });
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
  <FakeFormTravelComplete />
</div>
</section>