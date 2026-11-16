import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
    site: "https://docs.x02.dev",
    integrations: [
        starlight({
            title: "Roblox Creator Docs",
            sidebar: [{label: "Docs", autogenerate: { directory: "." }}]
        })
    ]
})