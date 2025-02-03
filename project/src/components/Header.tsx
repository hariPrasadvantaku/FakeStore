import React, { useState } from 'react';
import { ShoppingCart, Store } from 'lucide-react';
import { CartDropdown } from './CartDropdown';
import { CartItem } from '../types';

interface HeaderProps {
  cartItemsCount: number;
  cartItems: CartItem[];
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onUpdateCartItem: (itemId: number, change: number) => void;
  onRemoveCartItem: (itemId: number) => void;
}

export function Header({
  cartItemsCount,
  cartItems,
  categories,
  selectedCategory,
  onCategoryChange,
  onUpdateCartItem,
  onRemoveCartItem
}: HeaderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">FakeStore</h1>
          </div>
          
          <div className="flex-1 max-w-xl mx-8">
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {isCartOpen && (
              <CartDropdown
                items={cartItems}
                onClose={() => setIsCartOpen(false)}
                onUpdateQuantity={onUpdateCartItem}
                onRemoveItem={onRemoveCartItem}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}