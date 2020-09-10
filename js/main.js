$(document).ready(function() {


    var dt = $('#tableMain').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Russian.json"
        },
    });

    $('#multiselect').multiselect({
        nonSelectedText: 'Выбрать колонки',
        nSelectedText: 'выбрано',
        allSelectedText: 'выбрано все',
        onChange: function(option, checked, select) {
            dt.columns($(option).val()).visible(checked);
        }
    });

    function hasChekTable() {

        if ($('.form-check--tr:checked').length > 0) {
            $('#activeBtns').removeClass('d-none');
        } else {
            $('#activeBtns').addClass('d-none');
        }
    }

    $('.form-check--tr').on('change', function() {
        hasChekTable();
    });

    $('#allChek').on('change', function() {
        if($(this).prop("checked")) {
            $('.form-check--tr').prop('checked',true);
        } else {
            $('.form-check--tr').prop('checked',false);
        }
        hasChekTable();
    });
});