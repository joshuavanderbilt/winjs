// Window IDs will start at 0 and increment by 1 when a window is created.
var winid = 0;

// Make window with specified title, content and width.
function openwindow(title, wincontent, width) {
	winid += 1;
	//Windows will be inserted into the element with the id "desktop"
	var desktop = document.getElementById("desktop");
	desktop.innerHTML += "<div class='window active' id='" + winid + "' style='position:absolute;left:40px;top:40px;width:" + width + "px;'><div class='title-bar'><div class='title-bar-text'>" + title + "</div><div class='title-bar-controls'><button onclick='const element = document.getElementById(" + winid + ");element.remove()' aria-label='Close'></button></div></div><div class='window-body'>" + wincontent + "</div></div>"
	//Make window draggable
  $( function() {
    $( ".window" ).draggable();
  } );

}

// Make window with specified title, iframe URL width and height.
function iwindow(title, wincontent, width, height) {   
        winid += 1;
        //Windows will be inserted into the element with the id "desktop"
        var desktop = document.getElementById("desktop");
        desktop.innerHTML += "<div class='window active' id='" + winid + "' style='position:absolute;left:40px;top:40px;width:" + width + "px;'><div class='title-bar'><div class='title-bar-text'>" + title + "</div><div class='title-bar-controls'><button onclick='const element = document.getElementById(" + winid + ");element.remove()' aria-label='Close'></button></div></div><div class='window-body'>" + "<iframe frameBorder='0' src='" + wincontent + "' width=100% height=" + height + "></iframe></div></div>"
        //Make window draggable
  $( function() {
    $( ".window" ).draggable();
  } );

}
