module.exports = {
  apps: [
    {
      name: "site-psicami",
      script: "server.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M", // Altere para 500 MB
    },
  ],
};
