# Title

This package correctly capitalizes your titles as per [The Chicago Manual of Style](http://www.chicagomanualofstyle.org/home.html). Furthermore, all of
Vercel's product names are capitalized properly as well.

## Usage

Firstly, install the package:

```bash
yarn add title
```

Then load it and convert any input:

```js
const title = require('title')

title('tHe cHicaGo maNual oF StyLe')

// Will result in:
// "The Chicago Manual of Style"
```

You can even pass words that should be capitalized as specified:

```js
title('FaCEbook is great', {
  special: [ 'facebook' ]
})

// Will result in:
// "facebook is great"
```

That's it!

### Command Line

You can also convert titles in the command line, if you want. Install the package globally:

```bash
yarn global add title
```

Next, run it:

```bash
title "tHe cHicaGo maNual oF StyLe"

# Will result in:
# "The Chicago Manual of Style"
```

To see all available options, run:

```bash
title -h
```

## Contributing

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Uninstall `title` if it's already installed: `yarn global remove title`
3. Link it to the global module directory: `yarn link`

After that, you can use the `title` command everywhere.

## Author

- Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo)) - [Vercel](https://vercel.com)
- Josh Junon ([@Qix-](https://github.com/Qix-))
