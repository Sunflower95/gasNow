// Class definition
var KTFormRepeater = function() {


    var formRepeater = function() {
        $('.repeater').repeater({
            initEmpty: false,

            defaultValues: {
                'text-input': ''
            },

            show: function() {
                $(this).slideDown();
            },

            hide: function(deleteElement) {
                if(confirm('Are you sure you want to delete this element?')) {
                    $(this).slideUp(deleteElement);
                }
            },
            repeaters: [{
                selector: '.inner-repeater'
            }]
        });
    }

    return {
        // public functions
        init: function() {
            formRepeater();
        }
    };
}();

jQuery(document).ready(function() {
    KTFormRepeater.init();
});

