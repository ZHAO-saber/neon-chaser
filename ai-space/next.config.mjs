/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 开发环境下，浏览器通过远程代理主机名（非 localhost）访问时需要放行，
  // 否则 Next 14.2+ 会对跨 Origin 的 RSC/导航请求返回 400。仅影响 dev。
  allowedDevOrigins: [
    "*.remote-agent.svc.cluster.local",
    "*.svc.cluster.local",
  ],
};

export default nextConfig;
