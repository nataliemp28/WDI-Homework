class AddProductToRetailer < ActiveRecord::Migration[5.0]
  def change
    add_reference :retailers, :product, foreign_key: true
  end
end
