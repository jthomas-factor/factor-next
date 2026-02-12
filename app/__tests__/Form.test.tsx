import Form from '@/components/Form';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Mock fetch globally
global.fetch = jest.fn();

describe('Contact Form', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('submits successfully and shows success alert', async () => {
    // Mock successful API response
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<Form />);

    // Fill out fields
    fireEvent.change(screen.getByPlaceholderText('Full name'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email address'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Phone number'), {
      target: { value: '555-5555' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter your message'), {
      target: { value: 'Hello world' },
    });

    // Submit form
    fireEvent.click(screen.getByText('Send Message'));

    // Expect fetch to be called with correct payload
    expect(fetch).toHaveBeenCalledWith('/api/contact', expect.any(Object));

    // Wait for success alert to appear
    await waitFor(() =>
      expect(screen.getByText('Message sent!')).toBeInTheDocument(),
    );
  });

  it('shows error alert when API fails', async () => {
    // Mock failed API response
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: { message: 'Domain not verified' } }),
    });

    render(<Form />);

    fireEvent.change(screen.getByPlaceholderText('Full name'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email address'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Phone number'), {
      target: { value: '555-5555' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter your message'), {
      target: { value: 'Hello world' },
    });

    fireEvent.click(screen.getByText('Send Message'));

    await waitFor(() =>
      expect(
        screen.getByText(
          'There was an issue sending your message. Please try again.',
        ),
      ).toBeInTheDocument(),
    );
  });
});
