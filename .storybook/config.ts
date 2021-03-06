import { configure } from '@storybook/react';
// automatically import all files ending in *.stories.tsx
const req = (require as any).context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);