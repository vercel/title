# title

This package correctly capitalizes your titles as per [The Chicago Manual of Style](http://www.chicagomanualofstyle.org/home.html). Furthermore, all of
ZEIT's product names are capitalized properly as well.

## Usage

Firstly, install the package:

```bash
yarn add @zeit/title
```

Then load it and convert any input:

```js
const convert = require('@zeit/title')

title('noW deSktop and now cLI are prODUCts of zeIt')

// Will result in:
// "Now Desktop and Now CLI Are Products of ZEIT"
```

That's it!

### Command Line

You can also convert titles in the command line, if you want. Install the package globally:

```bash
yarn global add @zeit/title
```

Next, run it:

```bash
title "noW deSktop and now cLI are prODUCts of zeIt"

# Will result in:
# "Now Desktop and Now CLI Are Products of ZEIT"
```

To see all available options, run:

```bash
title -h
```

## Contributing

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Uninstall `title` if it's already installed: `yarn global remove @zeit/title`
3. Link it to the global module directory: `yarn link`

After that, you can use the `title` command everywhere.

## Author

Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo)) - [ZEIT](https://zeit.co)
