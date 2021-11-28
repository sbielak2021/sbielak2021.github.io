function send_to_page(id){
    window.location.href = "{" + id + "| relative_url}";
}


function show (id){
    document.getElementById(id).style.display = "block";
}
function hide (id){
    document.getElementById(id).style.display = "none";
}