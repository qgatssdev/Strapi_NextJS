module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a3204c2ac9975c78d9e9a5755d2d77e6'),
  },
});
