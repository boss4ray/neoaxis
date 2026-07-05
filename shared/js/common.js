document.addEventListener("neoaxis:includes-ready", () => {
    const currentPath = normalizePath(window.location.pathname);

    document.querySelectorAll(".site-nav a").forEach((link) => {
        const linkPath = normalizePath(new URL(link.href).pathname);
        const isHome = linkPath === "/";
        const isActive = isHome ? currentPath === "/" : currentPath.startsWith(linkPath);

        link.toggleAttribute("aria-current", isActive);
    });
});

function normalizePath(path) {
    if (path.length > 1 && path.endsWith("/")) {
        return path.slice(0, -1);
    }

    return path;
}
