var A02_EventInspector;
(function (A02_EventInspector) {
    console.log("start");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        var x = _event.pageX;
        var y = _event.pageY;
        var span = document.querySelector("span");
        var position = span;
        position.style.left = x + "px";
        position.style.top = y + "px";
        position.textContent = "x-Koordinate " + x + " px" + " , " + "y-Koordinate " + y + " px";
    }
    function logInfo(_event) {
        console.log(_event);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.type);
    }
})(A02_EventInspector || (A02_EventInspector = {}));
//# sourceMappingURL=script.js.map