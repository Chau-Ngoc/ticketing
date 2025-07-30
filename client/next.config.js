module.exports = {
  webpack: (config) => {
    return {
      ...config,
      watchOptions: {
        ...config.watchOptions,
        poll: 300,
      },
    };
  },
  allowedDevOrigins: ["ticketing.test"],
};
