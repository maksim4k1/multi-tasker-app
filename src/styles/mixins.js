export const gap = (gapX, gapY=gapX) => `
  column-gap: ${gapX};
  -webkit-column-gap: ${gapX};
  -o-column-gap: ${gapX};
  -moz-column-gap: ${gapX};
  -ms-column-gap: ${gapX};
  row-gap: ${gapY};
  -webkit-row-gap: ${gapY};
  -o-row-gap: ${gapY};
  -moz-row-gap: ${gapY};
  -ms-row-gap: ${gapY};
`;
export const max_lines = (lines) => `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  line-clamp: ${lines};
  box-orient: vertical;
  overflow: hidden;
`;