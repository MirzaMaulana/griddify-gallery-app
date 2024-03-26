import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

createInertiaApp({
    // Below you can see that we are going to get all React components from resources/js/Pages folder
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.jsx`,
            import.meta.glob("./pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
