const StartFunc = async (row, $element, field) => {
    if (field === "KS-Delete") {
        let jVarLocalFromSwal = await Swal.fire({
            title: "Are you sure?",
            text: "You want to add items to this bill...",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "grey",
            confirmButtonText: "Yes",
            reverseButtons: true,
            focusCancel: true,
            cancelButtonText: "Cancel"
        });

        if (jVarLocalFromSwal.isConfirmed) {
            if ("pk" in row) {
                window.location.href = `index.html?pk=${row.pk}`;
            }
        }
    }
};

export { StartFunc };
