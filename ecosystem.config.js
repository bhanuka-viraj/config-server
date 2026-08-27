module.exports = {
  apps: [
    {
      name: 'config-server',
      script: '/usr/bin/java',
      args: ['-jar', '-Dserver.port=8888', '/opt/app/config-server.jar'],
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      error_file: '/var/log/app/config-server-error.log',
      out_file: '/var/log/app/config-server-out.log',
      merge_logs: true,
      env: {
        SPRING_PROFILES_ACTIVE: 'prod'
      }
    }
  ]
};
