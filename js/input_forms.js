$(':input[type="number"]').change(function(){
    this.value = parseFloat(this.value).toFixed(2);
});

$(document).ready(function(){
    display_title_header();
    display_forms();
    display_navigation_bar("Input_Forms");
});