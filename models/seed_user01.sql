INSERT INTO users (
  email, 
  password, 
  names, 
  lastnames, 
  qr
) VALUES (
  'user01@example.com',
  '1234abcd',
  'Juan',
  'Valdez',
  'data:image/png;base64,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'
);