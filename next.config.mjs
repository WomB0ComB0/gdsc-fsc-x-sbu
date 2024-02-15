import million from 'million/compiler';
import * as pwa from '@ducanh2912/next-pwa';

const withPwa = pwa.default({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: 'public',
  workboxOptions: {
    disableDevLogs: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
};

export default million.next(withPwa(nextConfig), { auto: { rsc: true } });
