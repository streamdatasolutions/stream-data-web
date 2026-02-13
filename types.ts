// Added React import to resolve namespace error for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}