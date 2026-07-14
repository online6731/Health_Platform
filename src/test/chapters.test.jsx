import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { chapters } from '../config/chapters';

const chapterModules = import.meta.glob('../chapters/Chapter*.jsx', { eager: true });
const proposalChapters = chapters.filter(({ id }) => id !== '0' && id !== 'export');

describe('chapter registry', () => {
  it('contains 78 unique chapter routes and matching components', () => {
    expect(proposalChapters).toHaveLength(78);
    expect(new Set(proposalChapters.map(({ id }) => id)).size).toBe(78);
    expect(new Set(proposalChapters.map(({ path }) => path)).size).toBe(78);

    for (const { id } of proposalChapters) {
      expect(chapterModules[`../chapters/Chapter${id}.jsx`]?.default).toBeTypeOf('function');
    }
  });
});

describe.each(proposalChapters)('chapter $id', ({ id, path, title }) => {
  it(`renders ${path} without a runtime exception`, () => {
    const Component = chapterModules[`../chapters/Chapter${id}.jsx`].default;
    const { container } = render(
      <MemoryRouter initialEntries={[path]}>
        <Component />
      </MemoryRouter>,
    );

    const heading = container.querySelector('h1');
    expect(heading).not.toBeNull();
    expect(heading.textContent).toContain(title);
  });
});
