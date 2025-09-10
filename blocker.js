<script>
(function() {
    try {
        // Get the hostname of the user's current page
        const hostname = window.location.hostname;

        // Check if it ends with ".sch.uk"
        if (hostname.endsWith(".sch.uk")) {
            // Replace the page content with a white page
            document.documentElement.innerHTML = "";
            document.body.style.background = "white";
        }
    } catch (e) {
        console.error("Error checking domain:", e);
    }
})();
</script>
