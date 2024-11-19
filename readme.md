# Title

This package correctly capitalizes your titles as per [The Chicago Manual of Style](http://www.chicagomanualofstyle.org/home.html).

## Usage

Install the package:

```bash
pnpm add title
```

Then, import it and convert any input text:

```js
import title from 'title'

title('tHe cHicaGo maNual oF StyLe')

// Will result in:
// "The Chicago Manual of Style"
```

You can pass words that should be capitalized as specified:

```js
title('FaCEbook is great', {
  special: [ 'facebook' ]
})

// Will result in:
// "facebook is great"
```

### Command Line

You can also convert titles in the command line. Install the package globally:

```bash
pnpm add -g title
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
2. Uninstall `title` if it's already installed: `pnpm remove -g title`
3. Link it to the global module directory: `pnpm link`

After that, you can use the `title` command everywhere.

## Original Authors

- Leo Lamprecht ([@leo](https://x.com/leo))
- Josh Junon ([@Qix-](https://github.com/Qix-))
