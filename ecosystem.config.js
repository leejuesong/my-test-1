module.exports = {
  apps : [{
    name:'dsm-agent-sample',
    script: 'index.js',
    instances:'1',
    autorestart: true,
      restart_delay: 5000,
      watch: false,
      max_memory_restart: "1G",
  }]
};
