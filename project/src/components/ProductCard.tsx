import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
    >
      <div className="aspect-w-1 aspect-h-1 w-full">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-48 p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 truncate">{product.title}</h3>
        <p className="mt-2 text-lg font-semibold text-indigo-600">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}