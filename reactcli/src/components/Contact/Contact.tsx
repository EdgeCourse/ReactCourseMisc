import React, { FC } from 'react';
import { ContactWrapper } from './Contact.styled';

interface ContactProps {}

const Contact: FC<ContactProps> = () => (
 <ContactWrapper data-testid="Contact">
    Contact Component
 </ContactWrapper>
);

export default Contact;
