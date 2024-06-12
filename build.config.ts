import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig([
  {
    entries: ['./lib/index.js', './bin/title.js'],
    rollup: {
      emitCJS: true,
    },
  },
]);
