
//  let z = [
//     {
//     field: 'id',
//     title: '#',
//     sortable: false,
//     width: 20,
//     selector: {
//         class: 'kt-checkbox--solid'
//     },
//     textAlign: 'center',
// }, {
//     field: 'title',
//     title: '{{ trans("project-management/project.form.fields.title") }}',
// },

//     {
//         field: 'country_name',
//         title: '{{ trans("project-management/project.form.fields.country") }}',
//     }, {
//         field: 'start_date_formatted',
//         title: '{{ trans("project-management/project.form.fields.start_date") }}',
//     },
//     {
//         field: 'due_date_formatted',
//         title: '{{ trans("project-management/project.form.fields.due_date") }}',
//     },
//     {
//         field: "Actions",
//         width: 80,
//         title: "{{ trans('shared/actions.labels.actions') }}",
//         sortable: false,
//         autoHide: false,
//         overflow: 'visible',
//         template: function (data) {
//             let x =[
//                 { label:"View",  ref: "www.google.com", icon: "flanticon2-eye" },
//                 { label:"Edit",  ref: "www.google.com", icon: "flanticon2-contract" },
//                 { label:"Delete",  ref: "www.google.com", icon: "flanticon2-trash" }
//               ];
//             let y = '<div class="dropdown">\
//             <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
//                 <i class="flaticon-more-1"></i>\
//             </a>\
//             <div class="dropdown-menu dropdown-menu-right">\
//             <ul class="kt-nav">'
//             x.forEach(element => {
//                 y += '<li class="kt-nav__item">\
//                 <a href="' + element.ref + '" class="kt-nav__link">\
//                     <i class="kt-nav__link-icon '+element.icon+' "></i>\
//                     <span class="kt-nav__link-text">'+element.label+'</span>\
//                 </a>\
//             </li>'
//             });
//             y +='</ul>\
//             </div>\
//         </div>'
//             return y;
//         },
//     }];
  function InitializeDatable(
        fetchDataRoute,
        targetTableId ,
        itemsPerPage ,
        confirmDeleteMessage,
        tableColumns
            ) {

        var KTUserListDatatable = function () {

            // variables
            var datatable;

            // init
            var init = function () {
                datatable = $(targetTableId).KTDatatable({
                    // datasource definition
                    data: {
                        type: 'remote',
                        source: {
                            read: {
                                url: fetchDataRoute,
                                method: 'GET'
                            },
                        },
                        pageSize:itemsPerPage, // display 20 records per page
                        serverPaging: true,
                        serverFiltering: true,
                        serverSorting: true,
                    },

                    // layout definition
                    layout: {
                        scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                        footer: false, // display/hide footer
                    },

                    // column sorting
                    sortable: true,

                    pagination: true,

                    search: {
                        input: $('#search'),
                        delay: 400,
                    },

                    translate: {
                        records: {
                            processing: ""
                        }
                    },
                    // columns definition
                    columns: tableColumns
         
                });
            }

            // search
            var search = function () {
                $('#kt_form_status').on('change', function () {
                    datatable.search($(this).val().toLowerCase(), 'Status');
                });
            }

            // selection
            var selection = function () {

                // event handler on check and uncheck on records
                datatable.on('kt-datatable--on-check kt-datatable--on-uncheck kt-datatable--on-layout-updated', function (e) {
                    var checkedNodes = datatable.rows('.kt-datatable__row--active').nodes(); // get selected records
                    var count = checkedNodes.length; // selected records count

                    $('#kt_subheader_group_selected_rows').html(count);

                    if (count > 0) {
                        $('#kt_subheader_search').addClass('kt-hidden');
                        $('#kt_subheader_group_actions').removeClass('kt-hidden');
                    } else {
                        $('#kt_subheader_search').removeClass('kt-hidden');
                        $('#kt_subheader_group_actions').addClass('kt-hidden');
                    }
                });


            }


            // selected records delete
            var selectedDelete = function () {
                $('#kt_subheader_group_actions_delete_all').on('click', function () {
                    // fetch selected IDs
                    var ids = datatable.rows('.kt-datatable__row--active').nodes().find('.kt-checkbox--single > [type="checkbox"]').map(function (i, chk) {
                        return $(chk).val();
                    });
                });
            }

            var updateTotal = function () {
                datatable.on('kt-datatable--on-layout-updated', function () {
                    $('#kt_subheader_total').html(datatable.getTotalRows() + ' Total');
                });
            };

            var deleteRow = function () {
                datatable.on('kt-datatable--on-ajax-done', function () {

                });

                datatable.on('kt-datatable--on-layout-updated', function () {
                    $(".action_delete").on("click", function (event) {
                        event.preventDefault();
                        let id = $(this).attr('data-id')
                        confirmAction({
                            message: confirmDeleteMessage,
                            type: "warning",
                            confirmButtonText: "{{ trans('shared/actions.buttons.yes') }}",
                            cancelButtonText: "{{ trans('shared/actions.buttons.no') }}",
                            onConfirm: () => {
                                document.getElementById('delete-form-' + id).submit();
                            },
                            onCancel: () => {
                            }
                        })
                    });
                })
            }
            return {
                // public functions
                init: function () {
                    init();
                    selection();
                    selectedDelete();
                    updateTotal();
                    deleteRow();

                },
            };
        }();

        // On document ready
        KTUtil.ready(function () {
            KTUserListDatatable.init();
        });

}

