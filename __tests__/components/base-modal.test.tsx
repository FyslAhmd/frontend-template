import React from 'react';
import { render, screen } from '@testing-library/react';
import { BaseModal } from '@/components/ui/base-modal';
import { describe, it, expect, vi } from 'vitest';

describe('BaseModal Component', () => {
  it('renders correctly when isOpen is true', () => {
    const handleClose = vi.fn();

    render(
      <BaseModal isOpen={true} onClose={handleClose} title="Test Modal Title">
        <p>Modal Inner Content</p>
      </BaseModal>
    );

    // Check if title is present
    expect(screen.getByText('Test Modal Title')).toBeInTheDocument();
    // Check if children are rendered
    expect(screen.getByText('Modal Inner Content')).toBeInTheDocument();
  });

  it('does not render content when isOpen is false', () => {
    const handleClose = vi.fn();

    render(
      <BaseModal isOpen={false} onClose={handleClose} title="Test Modal Title">
        <p>Modal Inner Content</p>
      </BaseModal>
    );

    // Modal Content should not be in the document
    expect(screen.queryByText('Modal Inner Content')).not.toBeInTheDocument();
  });
});
