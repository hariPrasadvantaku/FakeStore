import React from 'react';
import { X } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
}

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="mt-6 flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain"
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <p className="text-3xl font-bold text-indigo-600">
                ${product.price.toFixed(2)}
              </p>
              
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900">Description</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={onAddToCart}
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}