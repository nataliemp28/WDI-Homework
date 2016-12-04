class AddRetailerToProduct < ActiveRecord::Migration[5.0]
  def change
    add_reference :products, :retailer, foreign_key: true
  end
end
