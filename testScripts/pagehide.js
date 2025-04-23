// pagehide event listener
    const handlePageHide = (e) => {
        if (!e.persisted) {
            submitForm(form, mappings);
        }
    };

    window.addEventListener("pagehide", handlePageHide);

    //replace with pagehide
    window.removeEventListener("pagehide", handlePageHide);
    
