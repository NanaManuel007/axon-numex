import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        keycloakify({
            accountThemeImplementation: "none",
            environmentVariables :[
                {name : "TERMS_AND_POLICY_URL", default:"https://www.google.com/"},
                {name : "FORGOT_PASSOWRD", default:"https://www.google.com/"}
            ]
        })
    ]
});
