// Namecheap cPanel (Setup Node.js App) startup entry file.
// This loads the compiled Nitro/TanStack Start server from .output/server/index.mjs.
import("./.output/server/index.mjs").catch((error) => {
  console.error("Failed to start server on Namecheap cPanel:", error);
  process.exit(1);
});
