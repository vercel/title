export const wordChar = "[^\\s'’\\(\\)!?;:\"-]";
export const leadBoundary = '(?:^|[.\\(\\)!?;:"-])';

export const titleRegex = new RegExp(
    `(?:(?:(\\s?${leadBoundary}\\s*)(${wordChar}))|(${wordChar}))(${wordChar}*[’']*${wordChar}*)`,
    "g"
);
