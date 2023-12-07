// scripts.js
$(document).ready(function() {
    // Function to render a single item using the template
    function renderItem(item) {
        var $item = $('<div class="item">');
        $item.find('.id').text(item.id);
        $item.find('.name').text(item.name);
        return $item;
    }

    // Function to load and display data
    function loadData() {
        $.getJSON('data.json', function(data) {
            var $dataContainer = $('#data-container');
            $dataContainer.empty();

            $.each(data, function(index, item) {
                $dataContainer.append(renderItem(item));
            });
        });
    }

    // Initial data load
    loadData();

    // Search functionality
    $('#search').on('input', function() {
        var searchTerm = $(this).val().toLowerCase();
        $('.item').each(function() {
            var $item = $(this);
            var name = $item.find('.name').text().toLowerCase();
            if (name.includes(searchTerm)) {
                $item.show();
            } else {
                $item.hide();
            }
        });
    });
});