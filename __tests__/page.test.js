import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Louis Chen');
  });

  it('renders technical skills section', () => {
    render(<Home />);
    const skillsHeading = screen.getByText('Technical Skills');
    expect(skillsHeading).toBeInTheDocument();
  });
});
