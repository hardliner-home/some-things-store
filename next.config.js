/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'www.automotiveone.com',
      'www.some-things-store-api.herokuapp.com',
      'some-things-store-api.herokuapp',
      'herokuapp.com',
      'https://some-things-store-api.herokuapp.com',
    ]
  }
};
