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
});