import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const env = process.env.NODE_ENV;

const nextConfig: NextConfig = {
	output: "export",
	assetPrefix: env == "production" ? "https://charlieanthony.github.io/ERSC-Livestream-React/" : "./",
};

const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(nextConfig);
