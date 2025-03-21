// onMount(() => {
//     console.log("Component is fully loaded!");

//     // Example: Get form values
//     const emailField = document.getElementById("Email");

//     function track_msdynmkt_exittrigger_135927779() {
//       window["msdynmkt"].setUser({ authId: emailField.value }); // ID, e-mail or phone number - see instructions
//       window["msdynmkt"].trackEvent({
//         name: "msdynmkt_exittrigger_135927779", //Trigger title: Exit trigger
//         ingestionKey:
//           "b1d765b9c293466bb1ef2ac825fc18f8-3d35c0db-60a3-4e5b-a38a-626cf4a27efb-7558",
//         version: "1.0.0",
//         properties: {
//           bindingid: emailField.value,
//         },
//       });
//     }

//     if (emailField.value) {
//       console.log("Email:", emailField.value);
//       track_msdynmkt_exittrigger_135927779();
//     }
//   });




  $(document).ready(function(){

    function track_msdynmkt_exittriggerrtm_083610246(emailField) {
        window["msdynmkt"].setUser({ authId: emailField});   // ID, e-mail or phone number - see instructions
        window["msdynmkt"].trackEvent({
            name: "msdynmkt_exittriggerrtm_083610246", //Trigger title: Exit Trigger RTM
            ingestionKey : "c233c22448aa4a799feedf6dd734d9c4-853de410-b103-4f95-91e2-b5d81be6e270-7136",
            version: "1.0.0" ,
        properties: {
         "bindingid" : emailField
        }
        });
    }


    if( $('#Email').val() ) {
        track_msdynmkt_exittriggerrtm_083610246($('#Email').val());
    }
  });



  
  