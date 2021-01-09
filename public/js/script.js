$(document).ready(function(){
    for(let level = 1; level <= 10; level++) {
        const element = `<option class="text-capitalize" value="${level}">${level}</option>`;
        $("#level").append(element);
    }
});