# Introduction to Compute

This branch contains the final iteration of the serverless application for the *Introduction to Compute* tutorial.

## How to use this

You can follow along with the *Introduction to Compute* tutorial by viewing the source code for the serverless application. Each change to the application corresponds to a section of the tutorial and is stored in a separate branch:

- [Initialized application and first commit](https://github.com/fastly/tacolabs/tree/fastly-compute-1)
- [Added origin hostname](https://github.com/fastly/tacolabs/tree/fastly-compute-2) - [diff](https://github.com/fastly/tacolabs/commit/189e46938f4ec8c852c02d10b0045e8fed500eff)
- [Set response headers](https://github.com/fastly/tacolabs/tree/fastly-compute-3) - [diff](https://github.com/fastly/tacolabs/commit/9f72ede4de4fe4207797802e719b2a0ca8777535)
- [Created custom 404 response](https://github.com/fastly/tacolabs/tree/fastly-compute-4) - [diff](https://github.com/fastly/tacolabs/commit/19f38fb34951ba0e88dbc089c06439f3a55f8eca)
- [Added 404 HTML page](https://github.com/fastly/tacolabs/tree/fastly-compute-5) - [diff](https://github.com/fastly/tacolabs/commit/4b841ab3e2a04fb4a4f1faac381e4b98c4726695)
- [Added robots.txt file](https://github.com/fastly/tacolabs/tree/fastly-compute-6) - [diff](https://github.com/fastly/tacolabs/commit/39c5cc1d4cda30fff2bff19a182132ae610f298d)
- [Added support for redirects](https://github.com/fastly/tacolabs/tree/fastly-compute-7) - [diff](https://github.com/fastly/tacolabs/commit/44deb1c56ed58dc371fba81e3237fedb92881ee9)
- [Configured log tailing](https://github.com/fastly/tacolabs/tree/fastly-compute-8) - [diff](https://github.com/fastly/tacolabs/commit/ba41891a20d7cb661a3310307665cace4dfeb1eb)
- [Set up a log streaming endpoint](https://github.com/fastly/tacolabs/tree/fastly-compute-9) - [diff](https://github.com/fastly/tacolabs/commit/153a0abc40fbcfb7492c857ec0c3328163c3c0b3)

We've removed the service ID information from the `fastly.toml` configuration file. If you want to try deploying this application, you'll need to edit the `fastly.toml` to update the author information and add your service ID.

## Security concerns

To report security concerns with this source code or the Taco Labs website, use https://www.fastly.com/security/report-security-issue.

## License

[MIT license](/LICENSE)
