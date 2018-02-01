import Button from '../../Button';
import React from 'react';

const BUTTON_VARIANTS = {
  confirmation: 'cta',
  information: 'primary',
  error: 'primary',
  destructive: 'warning'
};

export default function DialogButtons({
  onClose,
  confirmLabel,
  cancelLabel,
  onConfirm,
  className,
  variant,
  ...otherProps
}) {
  const confirmVariant = BUTTON_VARIANTS[variant] || 'primary';

  return (
    <div className={className}>
      {cancelLabel &&
        <Button variant="secondary" label={cancelLabel} onClick={onClose} />
      }
      {confirmLabel &&
        <Button variant={confirmVariant} label={confirmLabel} onClick={onConfirm} />
      }
    </div>
  );
}