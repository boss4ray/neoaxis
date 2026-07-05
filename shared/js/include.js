(async function includePartials() {
    const targets = Array.from(document.querySelectorAll("[data-include]"));

    await Promise.all(targets.map(async (target) => {
        const path = target.getAttribute("data-include");

        try {
            const response = await fetch(path, { cache: "no-cache" });

            if (!response.ok) {
                throw new Error(`Unable to load ${path}`);
            }

            target.innerHTML = await response.text();
        } catch (error) {
            console.error(error);
        }
    }));

    document.dispatchEvent(new CustomEvent("neoaxis:includes-ready"));
}());
