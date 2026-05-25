import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const nextConfig: NextConfig = {
	output: "export",
	assetPrefix: "https://charlieanthony.github.io/ERSC-Livestream-React/",
};

const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(nextConfig);
