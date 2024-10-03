function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const isHidden = sidebar.style.left === "-250px";

    if (isHidden) {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-250px";
    }
}
