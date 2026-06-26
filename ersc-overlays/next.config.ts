import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const env = process.env.NODE_ENV;
// assetPrefix: env == "production" ? "~/WebstormProjects/ERSC-Livestream-React/ersc-overlays/out" : undefined,

const nextConfig: NextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	assetPrefix: env == "production" ? "https://rsc.canth.dev/" : undefined,
};

const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(nextConfig);
