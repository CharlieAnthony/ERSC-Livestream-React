import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const env = process.env.NODE_ENV;
// assetPrefix: env == "production" ? "https://charlieanthony.github.io/ERSC-Livestream-React/" : undefined,

const nextConfig: NextConfig = {
	output: "export",
	assetPrefix:
		env == "production" ? "/Users/charl/WebstormProjects/ERSC-Livestream-React/ersc-overlays/out" : undefined,
};

const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(nextConfig);
