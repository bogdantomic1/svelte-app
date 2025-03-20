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


function submitForm() {
    d365mktformcapture.waitForElement("#fakeFormTravel").then((form) => {
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
            { FormFieldName: "Taxnumber", DataverseFieldName: "cr697_taxnumber" },
            { FormFieldName: "Email", DataverseFieldName: "emailaddress1" },
            { FormFieldName: "FirstName", DataverseFieldName: "firstname" },
            { FormFieldName: "LastName", DataverseFieldName: "cr697_lastnamect" },
            { FormFieldName: "LastName", DataverseFieldName: "cr697_lastnameleadct" },
        ];

        const serializedForm = d365mktformcapture.serializeForm(form, mappings);
        const payload = serializedForm.SerializedForm.build();

        const formedUrl =
            "https://public-eur.mkt.dynamics.com/api/v1.0/orgs/9bc5e4fe-4bda-ef11-b8e4-000d3ab73d5f/landingpageforms/forms/6b886942-0904-f011-bae3-7c1e5220bcad";

        if (document.getElementById("Email").value.trim() !== "") {
            fetch(formedUrl, {
                method: "post",
                headers: { "Content-Type": "application/json;charset=UTF-8" },
                body: payload.data,
                keepalive: true,
            })
                .then(() => console.log("submission complete"))
                .catch((e) => console.log(e));
        } else {
            console.log("nema");
            return;
        }
    });
}

$(document).ready(function () {
    // Attach pagehide event to submit the form
    window.addEventListener("pagehide", submitForm);

    // Remove pagehide event listener when navigation buttons are clicked
    $("ul.stepsIndicator a, button.btn-next, a.btn-prev").on("click", function () {
        window.removeEventListener("pagehide", submitForm);
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
            window.removeEventListener("pagehide", submitForm);
        });
    });
});





//   ################################################################################################################################
//   ################################################################################################################################
//   ################################################################################################################################
//   ################################################################################################################################





$(document).ready(function () {
    // Attach pagehide event to submit the form
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

    // Remove pagehide event listener when navigation buttons are clicked
    $("ul.stepsIndicator a, button.btn-next, a.btn-prev").on("click", function () {
        window.onpagehide = null;
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
            window.onpagehide = null;
        });
    });
});