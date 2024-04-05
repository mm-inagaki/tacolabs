# Introduction to Compute

This branch contains the final iteration of the serverless application for the [*Introduction to Compute*](https://www.fastly.com/documentation/solutions/tutorials/introduction-to-compute/) tutorial.

## How to use this

You can follow along with the *Introduction to Compute* tutorial by viewing the source code for the serverless application. Each change to the application corresponds to a section of the tutorial and is stored in a separate branch:

- [Initialize application and first commit](https://github.com/fastly/tacolabs/tree/fastly-compute-v1)
- [Hello, world!](https://github.com/fastly/tacolabs/tree/fastly-compute-v2) - [diff](https://github.com/fastly/tacolabs/commit/b05dc1e62e774eb96e7a6e3a799d6832021f2fbe)
- [Add origin hostname](https://github.com/fastly/tacolabs/tree/fastly-compute-v3) - [diff](https://github.com/fastly/tacolabs/commit/ff292697076434934e1653a0623190108b6ad7ef)
- [Set response headers](https://github.com/fastly/tacolabs/tree/fastly-compute-v4) - [diff](https://github.com/fastly/tacolabs/commit/3390165e0c7c19dfbe0268894de1c371f7ce3420)
- [Create custom 404 response](https://github.com/fastly/tacolabs/tree/fastly-compute-v5) - [diff](https://github.com/fastly/tacolabs/commit/c2bf5122efd2644872bd31ea1630a6129e0824d6)
- [Add 404 HTML page](https://github.com/fastly/tacolabs/tree/fastly-compute-v6) - [diff](https://github.com/fastly/tacolabs/commit/5004f97cee77c7e08063168de4244d719c1f6c4a)
- [Add robots.txt file](https://github.com/fastly/tacolabs/tree/fastly-compute-v7) - [diff](https://github.com/fastly/tacolabs/commit/82f83f7d638adcd4a6fa2700fa7608b78e27d7bb)
- [Add support for redirects](https://github.com/fastly/tacolabs/tree/fastly-compute-v8) - [diff](https://github.com/fastly/tacolabs/commit/b2c4dad5cc0c67596f4c7d2491633795015f8495)
- [Configure log tailing](https://github.com/fastly/tacolabs/tree/fastly-compute-v9) - [diff](https://github.com/fastly/tacolabs/commit/1d7659b8a84ca57d47b12fcef0a71cf13393172c)
- [Set up a log streaming endpoint](https://github.com/fastly/tacolabs/tree/fastly-compute-v10) - [diff](https://github.com/fastly/tacolabs/commit/05ba696e79abb2724a7e40672f3a33b96499c94f)

We've removed the service ID information from the `fastly.toml` configuration file. If you want to try deploying this application, you'll need to edit the `fastly.toml` to update the author information and add your service ID.

## Security concerns

To report security concerns with this source code or the Taco Labs website, use https://www.fastly.com/security/report-security-issue.

## License

[MIT license](/LICENSE)
