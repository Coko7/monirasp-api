# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 18-02-2022

### Added

- Add Express API + temperature monitoring

## [1.0.1] - 18-02-2022

### Changed

- Update README

## [1.0.2] - 19-02-2022

### Added

- Add CORS support

## [1.0.3] - 19-02-2022

### Added

- Added CHANGELOG file

### Changed

- Updated description and keywords in [package.json](./package.json)

### Fixed

- Added CORS in the list of dependencies
- Removed unneeded `printf` in [tempmon.sh](./tempmon.sh)

## [1.0.4] - 22-02-2022

### Fixed

- Changed write delay in [tempmon.sh](./tempmon.sh) from 5 minutes to 5 seconds

## [1.1.0] - 22-02-2022

### Added

- Added a rule in [.gitignore](./.gitignore) to not track `data/temperatures.csv`

### Changed

- Changed [tempmon.sh](./tempmon.sh) to overwrite the data file each time (prevent the file from growing infinitely)
- Changed route **GET /temperature** in [app.ts](./app.ts) to return the first (and only) element of `tempData`

## [1.2.0] - 22-02-2022

### Changed

- Renamed project from **monirasp-backend** to **monirasp-api**

### Added

- Added a frontend usage example of the API in [frontend](./frontend/)

## [1.2.1] - 22-02-2022

### Changed

- Updated [README](./README.md)
