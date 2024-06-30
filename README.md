# gis-utils

A library of utilities for GIS-based computations

[![npm version](https://badge.fury.io/js/@eanair%2Fgis-utils.svg)](https://badge.fury.io/js/@eanair%2Fgis-utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Features

- **Ironclad Type Safety** 🛡️: Harness the full power of TypeScript for rock-solid code integrity
- **Powerful Cesium Optimization Tools** 🧮: Essential mathematical operations and performance boosters for Cesium Apps
- **Multi-Format Support** 📊: Process diverse geographic data including Custom 3D Tiles and GeoJSON
- **WGS84 Specialized Computations** 🌐: Precise mathematical operations tailored for Earth's coordinate system
- **Flexible Function Calls** 🔄: Support for both Sync and Async methods maximizing development convenience
- **Turbo-charged WebAssembly** ⚡: C++-based Async functions guarantee 30%+ faster computation speeds

## Installation

```bash
npm i @eanair/gis-utils
```

## Usage

```ts
import { getAngleBetweenVectors3D, getAngleBetweenVectors3DAsync } from "@eanair/gis-utils";

// Synchronous usage
const angle = getAngleBetweenVectors3D(vector1, vector2);

// Asynchronous usage
const angleAsync = await getAngleBetweenVectors3DAsync(vector1, vector2);
```

## License

[MIT License](LICENSE)
