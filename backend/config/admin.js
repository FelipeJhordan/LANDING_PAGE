module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '976eecd97050c8207d431508fe95b722'),
  },
});
