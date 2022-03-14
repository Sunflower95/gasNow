function confirmAction(options) {
    swal.fire({
        buttonsStyling: false,
        html: options.message,
        type: options.type || "info",
        confirmButtonText: options.confirmButtonText || 'Yes',
        confirmButtonClass: "btn btn-sm btn-bold btn-brand",
        showCancelButton: true,
        cancelButtonText: options.cancelButtonText || 'No, cancel',
        cancelButtonClass: "btn btn-sm btn-bold btn-default"
    }).then(function (result) {
        if (result.value) {
            options.onConfirm();
        } else if (result.dismiss === 'cancel') {
            options.onCancel();
        }
    });
}
