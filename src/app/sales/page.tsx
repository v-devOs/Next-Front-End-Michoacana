'use client'

import { createData } from '@/actions/admin/crudActions'
import { getAllData } from '@/actions/general/getData'
import { Loading } from '@/components/ui'
import { Product } from '@/interfaces/admin'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface ProductWithQuantity extends Product {
  quantity: number;
}

interface Sale {
  date: Date | string,
  quantity: number,
  id_employee: number,
  id_product: number,
}

const SalesPage = () => {
  const [productsToGenSale, setProductsToGenSale] = useState<ProductWithQuantity[]>([])
  const [products, setProducts] = useState<Product[]>()

  const generateSale = async () => {
    try {



    } catch (error) {
      console.log('Error al crear venta', error)

    }
  }

  const handleAddProduct = (product: Product) => {
    // Verificar si el producto ya existe
    const existingProduct = productsToGenSale.find(p => p.id_product === product.id_product)

    if (existingProduct) {
      // Si existe, incrementar la cantidad
      setProductsToGenSale(prev => prev.map(p =>
        p.id_product === product.id_product
          ? { ...p, quantity: p.quantity + 1 }
          : p
      ))
    } else {
      // Si no existe, agregarlo con cantidad 1
      setProductsToGenSale(prev => [...prev, { ...product, quantity: 1 }])
    }
  }

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return // No permitir cantidades menores a 1

    setProductsToGenSale(prev => prev.map(p =>
      p.id_product === productId
        ? { ...p, quantity: newQuantity }
        : p
    ))
  }

  const removeProduct = (productId: number) => {
    setProductsToGenSale(prev => prev.filter(p => p.id_product !== productId))
  }

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getAllData('product')
      setProducts(data)
    }

    loadProducts()
  }, [])

  if (!products) return <Loading />

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h1 className="text-2xl font-bold mb-2">Ventas</h1>
        <div className="text-gray-600">

          <p>Fecha: <span className="font-medium text-gray-800">
            {new Date().toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </span></p>
        </div>
      </div>

      <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Seleccionar Producto
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
          onChange={(e) => {
            const selectedProduct = products?.find(p => p.id_product === parseInt(e.target.value))
            if (selectedProduct) handleAddProduct(selectedProduct)
          }}
          value=""
        >
          <option value="" disabled>Seleccione un producto</option>
          {products?.map(product => (
            <option key={product.id_product} value={product.id_product}>
              {product.product} - ${product.price}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <h2 className='text-2xl font-bold text-gray-800'>Productos agregados al carrito</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          productsToGenSale?.map(item => (
            <div key={item.id_product} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image
                  src={item.product_image_url || '/no-image.jpg'}
                  alt={item.product}
                  width={150}
                  height={150}
                  className="rounded-md mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.product}</h3>
              <p className="text-purple-600 font-medium mb-3">
                ${item.price.toFixed(2)}
              </p>

              <div className="flex items-center justify-between gap-2 mb-3">
                <button
                  onClick={() => updateQuantity(item.id_product, item.quantity - 1)}
                  className="bg-purple-100 text-purple-600 px-3 py-1 rounded-md hover:bg-purple-200"
                >
                  -
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id_product, item.quantity + 1)}
                  className="bg-purple-100 text-purple-600 px-3 py-1 rounded-md hover:bg-purple-200"
                >
                  +
                </button>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-gray-600">
                  Total: <span className="font-medium text-purple-600">${(item.price * item.quantity).toFixed(2)}</span>
                </p>
                <button
                  onClick={() => removeProduct(item.id_product)}
                  className="text-red-500 hover:text-red-600"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        }
      </div>

      {productsToGenSale.length > 0 && (
        <div className="mt-6 bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Resumen de la venta</h3>
              <p className="text-gray-600">Total de productos: <span className="font-medium text-gray-800">
                {productsToGenSale.reduce((acc, item) => acc + item.quantity, 0)}
              </span></p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Total a pagar:</p>
              <p className="text-2xl font-bold text-purple-600">
                ${productsToGenSale.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SalesPage