        var timeOut;
        function scrollToTop() {
            if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
                window.scrollBy(0, -5);
                timeOut = setTimeout('scrollToTop()', 2);
            }
            else clearTimeout(timeOut);
            return true;
        }

window.onload = function (){
	scrollToTop();
};







