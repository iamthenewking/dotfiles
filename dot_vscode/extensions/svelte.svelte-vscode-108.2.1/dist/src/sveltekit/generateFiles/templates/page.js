"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1(config) {
    const ts = `
<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>
    `.trim();
    const js = `
<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>
    `.trim();
    return config.type === 'js' ? js : ts;
}
exports.default = default_1;
//# sourceMappingURL=page.js.map