json.extract! product, :id, :description, :retailer, :image, :price_at_purchase, :created_at, :updated_at
json.url product_url(product, format: :json)