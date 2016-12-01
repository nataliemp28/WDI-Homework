class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.string :city_country
      t.float :approx_cost
      t.string :best_time_to_visit
      t.boolean :sun_venue
      t.string :image

      t.timestamps
    end
  end
end
