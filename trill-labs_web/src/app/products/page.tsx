import type { Metadata } from 'next';
import Products from '@/views/Products';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Discover Limba and other AI-powered software products from Trill Labs Ltd.',
};

export default function ProductsPage() {
  return <Products />;
}
