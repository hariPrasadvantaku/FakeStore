import React from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { CartItem } from '../types';

interface CartDropdownProps {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (itemId: number, change: number) => void;
  onRemoveItem: (itemId: number) => void;
}

export function CartDropdown({ items, onClose, onUpdateQuantity, onRemoveItem }: CartDropdownProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="absolute top-12 right-0 w-96 bg-white rounded-lg shadow-xl p-4 z-50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Cart</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="text-gray-500 text-center py-4">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="absolute top-12 right-0 w-96 bg-white rounded-lg shadow-xl p-4 z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Cart</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex items-center py-4 border-b">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
            <div className="ml-4 flex-1">
              <h4 className="text-sm font-medium text-gray-900 truncate">{item.title}</h4>
              <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => onUpdateQuantity(item.id, -1)}
                  className="text-gray-500 hover:text-gray-700"
                  disabled={item.quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="mx-2 text-gray-600">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.id, 1)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-bold text-indigo-600">${total.toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
}