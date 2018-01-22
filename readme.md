# title

This package correctly capitalizes your titles as per [The Chicago Manual of Style](http://www.chicagomanualofstyle.org/home.html). Furthermore, all of
ZEIT's product names are capitalized properly as well automatically.

## Usage

Firstly, install the package:

```bash
yarn add @zeit/title
```

Then load it and convert any input:

```js
const convert = require('@zeit/title')

title('noW deSktop and now cLI are prODUCts of zeIt')
// Now Desktop and Now CLI Are Products of ZEIT
```

That's it!

### CLI

You can also convert titles in the command line, if you want. Install the package globally:

```bash
yarn global add @zeit/title
```

Next, run it:

```bash
title "noW deSktop and now cLI are prODUCts of zeIt"
# Now Desktop and Now CLI Are Products of ZEIT
```

To see all available options, run:

```bash
title -h
```
