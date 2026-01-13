/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// Check if we are running under Jest or if we are running 'next start' (production server)
// 'next start' runs the production build, which was already bundled with Rspack.
// It seems next-rspack might interfere when running 'next start' if it tries to re-configure webpack?
// The error says "Cannot call withRspack and pass the --webpack flag".
// This suggests that 'next start' might be internally setting a flag that conflicts with withRspack.
// However, 'withRspack' should ideally be safe to call.
// Let's try to conditionally apply it only during build or dev.

const isJest = process.env.JEST_WORKER_ID !== undefined;
const isProductionRun = process.argv.includes('start');

if (!isJest && !isProductionRun) {
  const withRspack = require('next-rspack');
  module.exports = withRspack(nextConfig);
} else {
  module.exports = nextConfig;
}
