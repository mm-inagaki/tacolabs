# Taco Labs :taco:

This is the example static website for the *Fastly 101: Delivery* tutorial. 

## How to use this repository

There are two ways of using this repository. 

You can fork or clone the repository and use the [Jekyll static site generator](https://jekyllrb.com) to build the site from scratch. 

Alternatively, if you'd prefer not to install Jekyll and the dependencies, you can access the fully built website in the `_built` directory. You could manually upload the HTML files and assets in that directory to an Amazon S3 bucket.

## Running locally

It can be helpful to preview changes on your computer. After forking or cloning this repository, perform the following steps to generate the site and preview it:

- Make sure you have ruby installed on your computer. See https://www.ruby-lang.org/en/downloads/
- `bundle install`
- `bundle exec jekyll serve`
- Point your browser at http://127.0.0.1:4000/

## Building locally

If you want to build the site locally (output to HTML), follow the instructions above to install ruby and the gems, then run `bundle exec jekyll build`. The site will be built and saved in the `_site` directory.

## Security concerns

To report security concerns with this source code or the Taco Labs website, use https://www.fastly.com/security/report-security-issue.

## Gracias

Virtually all of the content for this website was lovingly borrowed from https://github.com/sinker/tacofancy. :beers:

## License

[MIT license](/LICENSE)
