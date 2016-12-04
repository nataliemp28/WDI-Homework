class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :description
      t.string :retailer
      t.string :image
      t.float :price_at_purchase

      t.timestamps
    end
  end
end
