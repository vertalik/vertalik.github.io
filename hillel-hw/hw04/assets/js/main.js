function showHide(element_id) {
    document.getElementById('disk').style.display = "none";
    document.getElementById('bio__hardkiss').style.display = "none";
    document.getElementById('music').style.display = "none";
    document.getElementById('video').style.display = "none";
    if (document.getElementById(element_id)) { 
        var obj = document.getElementById(element_id); 
        if (obj.style.display != "block") { 
            obj.style.display = "block"; 
        }
    }
}   