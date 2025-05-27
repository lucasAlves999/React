import React, { useState } from 'react';
import { Plus, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductList from '@/components/ProductList';
import ProductModal from '@/components/ProductModal';
import { useProducts } from '@/hooks/useProducts';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleSaveProduct = (productData) => {
    if (editingProduct) {
      updateProduct(editingProduct.id, productData);
    } else {
      addProduct(productData);
    }
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const activeProducts = products.filter(p => p.status === 'ativo');
  const inactiveProducts = products.filter(p => p.status === 'inativo');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Store className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Mercadinho</h1>
                <p className="text-gray-600">Gerencie seus produtos</p>
              </div>
            </div>
            <Button onClick={handleAddProduct} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Novo Produto
            </Button>
          </div>

          <Tabs defaultValue="ativos" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="todos">Todos ({products.length})</TabsTrigger>
              <TabsTrigger value="ativos">Ativos ({activeProducts.length})</TabsTrigger>
              <TabsTrigger value="inativos">Inativos ({inactiveProducts.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="todos" className="mt-6">
              <ProductList 
                products={products}
                onEdit={handleEditProduct}
                onDelete={deleteProduct}
              />
            </TabsContent>
            
            <TabsContent value="ativos" className="mt-6">
              <ProductList 
                products={activeProducts}
                onEdit={handleEditProduct}
                onDelete={deleteProduct}
              />
            </TabsContent>
            
            <TabsContent value="inativos" className="mt-6">
              <ProductList 
                products={inactiveProducts}
                onEdit={handleEditProduct}
                onDelete={deleteProduct}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProduct(null);
        }}
        onSave={handleSaveProduct}
        product={editingProduct}
      />
    </div>
  );
};

export default Index;
