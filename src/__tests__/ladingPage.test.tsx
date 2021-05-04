import { screen, render } from '@testing-library/react';
import LadingPage from '../pages/LadingPage';

export const text = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;

describe('Lading page', () => {
  it('Should has a image with attribute src', () => {
    render(<LadingPage />);
    const image = screen.getByAltText('Pessoa');

    expect(image).toHaveAttribute('src');
  });

  it('Should has a div with text in p' + text, () => {
    render(<LadingPage />);

    const textInDiv = screen.getByTitle('titleRight');

    const paragram = screen.getByTestId('paragam');
    expect(textInDiv).toContainElement(paragram);
  });
});
