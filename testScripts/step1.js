document.addEventListener("DOMContentLoaded", () => {
    d365mktformcapture
      .waitForElement("#fakeFormTravel") // example: "#form1" as a selector for form with id="form1"
      .then((form) => {
        const mappings = [
            {
                FormFieldName: "Packet",
                DataverseFieldName: "cr697_package",
                DataverseFieldValue: [
                    { FormValue: "206450000", DataverseValue: "0" }, // A
                    { FormValue: "206450001", DataverseValue: "1" }, // B
                    { FormValue: "206450002", DataverseValue: "2" }, // C
                ],
            },
            {
                FormFieldName: "Taxnumber",
                DataverseFieldName: "cr697_taxnumber",
            },
            {
                FormFieldName: "Email",
                DataverseFieldName: "emailaddress1",
            },
            {
                FormFieldName: "FirstName",
                DataverseFieldName: "firstname",
            },
            // {
            //     FormFieldName: "LastName",
            //     DataverseFieldName: "lastname",
            // },
            {
                FormFieldName: "LastName",
                DataverseFieldName: "cr697_lastnamect",
            },
            {
                FormFieldName: "LastName",
                DataverseFieldName: "cr697_lastnameleadct",
            },

        ];

        window.addEventListener("pagehide", (e) => {
          if (!e.persisted) {
            const serializedForm = d365mktformcapture.serializeForm(
              form,
              mappings
            );
            const payload = serializedForm.SerializedForm.build();

            // const captureConfig = {
            //   FormId: "dee03d17-94e7-ef11-9342-000d3aba33c2",
            //   FormApiUrl:
            //     "https://public-eur.mkt.dynamics.com/api/v1.0/orgs/9bc5e4fe-4bda-ef11-b8e4-000d3ab73d5f/landingpageforms",
            // };
            // captureConfig we get from crm, rule for forming url is => FormApiUrl + "/forms/" + FormId

            const formedUrl =
              "https://public-eur.mkt.dynamics.com/api/v1.0/orgs/9bc5e4fe-4bda-ef11-b8e4-000d3ab73d5f/landingpageforms/forms/6b886942-0904-f011-bae3-7c1e5220bcad";

            if (document.getElementById("Email").value.trim() !== "") {
              fetch(formedUrl, {
                method: "post",
                headers: {
                  "Content-Type": "application/json;charset=UTF-8",
                },
                body: payload.data,
                keepalive: true,
              })
                .then(() => {
                  console.log("submission complete");
                })
                .catch((e) => {
                  console.log(e);
                });
            } else {
              console.log("nema");
              return;
            }
          }
        });
      });
  });

























//   ################################################################################################################################
//   ################################################################################################################################
//   ################################################################################################################################
//   ################################################################################################################################
//   ################################################################################################################################
//   ################################################################################################################################
//   ################################################################################################################################
//   ################################################################################################################################
//   ################################################################################################################################
//   ################################################################################################################################
//   ################################################################################################################################
//   ################################################################################################################################
//   ################################################################################################################################
//   ################################################################################################################################



$(document).ready(function () {
    // Define the submitForm function
    function submitForm(form, mappings) {
        const serializedForm = d365mktformcapture.serializeForm(form, mappings);
        const payload = serializedForm.SerializedForm.build();

        const formedUrl =
            "https://public-eur.mkt.dynamics.com/api/v1.0/orgs/9bc5e4fe-4bda-ef11-b8e4-000d3ab73d5f/landingpageforms/forms/6b886942-0904-f011-bae3-7c1e5220bcad";

        if (document.getElementById("Email").value.trim() !== "") {
            fetch(formedUrl, {
                method: "post",
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                },
                body: payload.data,
                keepalive: true,
            })
                .then(() => {
                    console.log("submission complete");
                })
                .catch((e) => {
                    console.log(e);
                });
        } else {
            console.log("nema");
            return;
        }
    }

    // Wait for the form element to be ready
    d365mktformcapture.waitForElement("#fakeFormTravel").then((form) => {
        const mappings = [
            {
                FormFieldName: "Numberofpeople",
                DataverseFieldName: "ct_numberofpeoplefortravelinsurance",
                DataverseFieldValue: [
                    { FormValue: "206450000", DataverseValue: "206450000" }, // Individually
                    { FormValue: "206450001", DataverseValue: "206450001" }, // Family
                    { FormValue: "206450002", DataverseValue: "206450002" }, // Group
                ],
            },
            {
                FormFieldName: "lnamStartingdayofinsurancee",
                DataverseFieldName: "ct_startingdateofinsurance",
            },
            {
                FormFieldName: "Durationofinsurance",
                DataverseFieldName: "ct_durationoftravelinsurance",
                DataverseFieldValue: [
                    { FormValue: "206450002", DataverseValue: "206450002" }, // 2 days
                    { FormValue: "206450003", DataverseValue: "206450003" }, // 3 days
                    { FormValue: "206450004", DataverseValue: "206450004" }, // 5 days
                    { FormValue: "206450005", DataverseValue: "206450005" }, // 8 days
                    { FormValue: "206450006", DataverseValue: "206450006" }, // 15 days
                    { FormValue: "206450007", DataverseValue: "206450007" }, // 21 days
                    { FormValue: "206450008", DataverseValue: "206450008" }, // 30 days
                    { FormValue: "206450009", DataverseValue: "206450009" }, // 60 days
                    { FormValue: "206450010", DataverseValue: "206450010" }, // 1 year
                ],
            },
            {
                FormFieldName: "Durationoftrip",
                DataverseFieldName: "ct_durationoftravel",
                DataverseFieldValue: [
                    { FormValue: "206450000", DataverseValue: "206450000" }, // Less than 90 days
                    { FormValue: "206450001", DataverseValue: "206450001" }, // 90 or more days
                ],
            },
            {
                FormFieldName: "Riskexposure",
                DataverseFieldName: "ct_exposuretorisk",
                DataverseFieldValue: [
                    { FormValue: "206450000", DataverseValue: "206450000" }, // Yes
                    { FormValue: "206450001", DataverseValue: "206450001" }, // No
                ],
            },
            {
                FormFieldName: "Packet",
                DataverseFieldName: "ct_travelpackage",
                DataverseFieldValue: [
                    { FormValue: "206450000", DataverseValue: "206450000" }, // A
                    { FormValue: "206450001*", DataverseValue: "206450001" }, // B
                    { FormValue: "206450002", DataverseValue: "206450002" }, // C
                ],
            },
            {
                FormFieldName: "Taxnumber",
                DataverseFieldName: "in2_tax_number",
            },
            {
                FormFieldName: "City",
                DataverseFieldName: "address1_city",
            },
            {
                FormFieldName: "Street",
                DataverseFieldName: "in2_address1_street",
            },
            {
                FormFieldName: "HouseNumber",
                DataverseFieldName: "in2_address1_house_no",
            },
            {
                FormFieldName: "GenderCT",
                DataverseFieldName: "in2_gender",
                DataverseFieldValue: [
                    { FormValue: "1", DataverseValue: "1" }, // Male
                    { FormValue: "2", DataverseValue: "2" }, // Female
                    { FormValue: "3", DataverseValue: "3" }, // Undefined
                ],
            },
            {
                FormFieldName: "FirstName",
                DataverseFieldName: "firstname",
            },
            {
                FormFieldName: "LastName",
                DataverseFieldName: "ct_lastnamect",
            },
            {
                FormFieldName: "DateOfbirth",
                DataverseFieldName: "in2_date_of_birth",
            },
            {
                FormFieldName: "Email",
                DataverseFieldName: "ct_emailct",
            },
            {
                FormFieldName: "PhoneNumber",
                DataverseFieldName: "in2_input_mobile_phone",
            },
            // {
            //     FormFieldName: "LastName",
            //     DataverseFieldName: "lastname",
            // },
            {
                FormFieldName: "Email",
                DataverseFieldName: "emailaddress1",
            },
 
        ];


        // Define the pagehide event listener
        const handlePageHide = (e) => {
             submitForm(form, mappings);
        };

        // Attach pagehide event listener
        window.addEventListener("unload", handlePageHide);

        // Remove pagehide event listener when navigation buttons are clicked
        $("ul.stepsIndicator a, button.btn-next, a.btn-prev").on("click", function () {
            window.removeEventListener("unload", handlePageHide);
        });
        // Custom jQuery selector for case-insensitive text match
    jQuery.expr[":"].icontains = jQuery.expr.createPseudo(function (arg) {
        return function (elem) {
            return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });

        // Remove pagehide event when clicking specific links containing "prijava"
        $('a:icontains(prijava)').each((i, e) => {
            $(e).on("click", function () {
                window.removeEventListener("unload", handlePageHide);
            });
        });
    });


//     const handlePageHide = (e) => {
//         if (!e.persisted) {
//             submitForm(form, mappings);
//         }
//     };

//     // Attach pagehide event listener
//     window.addEventListener("pagehide", handlePageHide);

//     // Remove pagehide event listener when navigation buttons are clicked
//     $("ul.stepsIndicator a, button.btn-next, a.btn-prev").on("click", function () {
//         window.removeEventListener("pagehide", handlePageHide);
//     });
//     // Custom jQuery selector for case-insensitive text match
// jQuery.expr[":"].icontains = jQuery.expr.createPseudo(function (arg) {
//     return function (elem) {
//         return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
//     };
// });

//     // Remove pagehide event when clicking specific links containing "prijava"
//     $('a:icontains(prijava)').each((i, e) => {
//         $(e).on("click", function () {
//             window.removeEventListener("pagehide", handlePageHide);
//         });
//     });
// });

    
});





